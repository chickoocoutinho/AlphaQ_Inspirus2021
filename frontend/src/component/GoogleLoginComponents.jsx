import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Button } from "antd";
import GoogleIcon from "../assets/google-icon.png";
import baseUrl from "../baseURL";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getData } from "../store/courseData";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const init = async () =>
  await window.gapi.client.init({
    apiKey: process.env.REACT_APP_DOC_API_KEY,
    discoveryDocs: ["https://classroom.googleapis.com/$discovery/rest"],
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "https://www.googleapis.com/auth/classroom.courses.readonly",
  });

const GoogleLoginComponents = () => {
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    dispatch(getData());
    if (localStorage.getItem("user_details")) {
      history.push("/courses");
    } else {
      const { name, email, imageUrl, googleId } = await res.profileObj;
      setLoading(true);
      const token = await res.tokenId;
      const params = {
        name,
        email,
        imageUrl,
        token,
        googleId,
      };

      //api to store user data
      localStorage.setItem("user_details", params);
      axios
        .post(`${baseUrl}user/signup`, params)
        .then((res) => {
          localStorage.setItem("user_id", res.data.user_id);
          history.push("/courses");
        })
        .catch((err) => console.log(err));
    }
  };

  const googleFailure = async (error) => {
    alert("Please enable allow cookies in chrome settings");
    console.log(error);
  };

  const logout = () => {
    localStorage.removeItem("user_details");
    history.push("/");
    setLoading(false);
  };

  const handleScriptLoad = async () => {
    new Promise((resolve) =>
      window.gapi.load("client:auth2", async () => {
        await init();
        resolve();
      })
    );
    setGlobalLoading(false);
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={globalLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <GoogleLogin
        onAutoLoadFinished={handleScriptLoad}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <>
            {!localStorage.getItem("user_details") ? (
              <Button
                size="large"
                icon={
                  <img
                    alt="google icon"
                    src={GoogleIcon}
                    style={{ marginRight: 10 }}
                  />
                }
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                type="secondary"
                loading={loading}
              >
                Login
              </Button>
            ) : (
              <Button size="large" onClick={logout}>
                Logout
              </Button>
            )}
          </>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={"single_host_origin"}
        discoveryDocs={["https://classroom.googleapis.com/$discovery/rest"]}
        scope="https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly"
      />
    </>
  );
};

export default GoogleLoginComponents;
