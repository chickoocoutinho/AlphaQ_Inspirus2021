import React from "react";
import { Collapse, Button } from "antd";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { setIframeUrl } from "../store/courseData";

const { Panel } = Collapse;

function ScrapUI({ books, projects, papers, references, displayIframe }) {
  const dispatch = useDispatch();
  const renderIframe = (url) => {
    dispatch(setIframeUrl({ data: url }));
    displayIframe();
  };

  return (
    <>
      <h1>Scraper Data</h1>
      <Collapse accordion defaultActiveKey="1">
        <Panel header="Open Source Projects" key="1">
          {projects.length === 0 ? (
            <Skeleton />
          ) : (
            <Collapse accordion defaultActiveKey="1">
              {projects.map((project, index) => (
                <Panel header={project.name} key={index + 1 + ""}>
                  <p>
                    <b>Repository:</b>{" "}
                    {project.html_url.split("/").slice(-2).join("/")}
                  </p>
                  <p>
                    <b>Description:</b> {project.description}
                  </p>

                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.html_url}
                    style={{ textDecoration: "none" }}
                  >
                    <Button type="primary" size="large">
                      Go to Repo
                    </Button>
                  </a>
                </Panel>
              ))}
            </Collapse>
          )}
        </Panel>
        <Panel header="Book Recommendations" key="2">
          {books.length === 0 ? (
            <Skeleton />
          ) : (
            <Collapse accordion defaultActiveKey="1">
              {books.map((book, index) => (
                <Panel header={book.title} key={index + 1 + ""}>
                  <p>
                    <b>Title:</b> {book.title}
                  </p>
                  <p>
                    <b>Description:</b> {book.description}
                  </p>
                  <p>
                    <b>Link:</b>{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={book.link}
                    >
                      {book.link}
                    </a>
                  </p>
                  <Button
                    onClick={() => renderIframe(book.link)}
                    type="primary"
                    size="large"
                  >
                    Display
                  </Button>
                </Panel>
              ))}
            </Collapse>
          )}
        </Panel>
        <Panel header="Research Papers / Materials" key="3">
          {papers.length === 0 ? (
            <Skeleton />
          ) : (
            <Collapse accordion defaultActiveKey="1">
              {papers.map((papers, index) => (
                <Panel header={papers.title} key={index + 1 + ""}>
                  <p>Title: {papers.title}</p>
                  <p>Description: {papers.description}</p>
                  <p>
                    Link:{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={papers.link}
                    >
                      {papers.link}
                    </a>
                  </p>
                  <Button
                    onClick={() => renderIframe(papers.link)}
                    type="primary"
                    size="large"
                  >
                    Render
                  </Button>
                </Panel>
              ))}
            </Collapse>
          )}
        </Panel>
        {references?.length !== 0 && (
          <Panel header="Classroom Materials" key="4">
            <Collapse accordion defaultActiveKey="1">
              {references.map((element, index) => (
                <Panel
                  header={element.driveFile.driveFile.title}
                  key={index + 1 + ""}
                >
                  <p>
                    <b>Title: </b>
                    {element.driveFile.driveFile.title}
                  </p>
                  <img
                    src={element.driveFile.driveFile.thumbnailUrl}
                    alt="thumbnail"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={element.driveFile.driveFile.alternateLink}
                    style={{ textDecoration: "none" }}
                  >
                    <Button type="primary" size="large">
                      Go to PDF
                    </Button>
                  </a>
                </Panel>
              ))}
            </Collapse>
          </Panel>
        )}
      </Collapse>
    </>
  );
}

export default ScrapUI;
