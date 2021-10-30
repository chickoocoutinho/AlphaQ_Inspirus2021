<p align="center">
<img src="https://github.com/InspirusDBCE/AlphaQ_Inspirus2021/blob/main/frontend/src/assets/Classroom_Buddy.svg" alt="Logo" width="80" height="80">
  <h3 align="center">ClassBuddy</h3>

  <p align="center">
    “Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.” - Jack Messman
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project
### Key Features
#### Feature 1
Get all the classes you’ve registered for just by signing into our platform using Google
#### Feature 2
The text editor encompasses features like bullet points, varied text formatting options and style enhancement features. 
#### Feature 3
The AI based search checks for all notes across the platform which are  closely related to the search query. 
#### Feature 4
Mind Maps to jot down your thoughts on the go

### Built With

* [Express](https://expressjs.com/)
* [MongoDb](https://www.mongodb.com/3)
* [React](https://reactjs.org/docs/release-channels.html)
* [Nodejs](https://nodejs.org/en/)
* [AntDesign](https://ant.design/)

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get API keys for GoogleMapsAPI, SendgridAPI, MONGODB
2. Clone the repo
   ```sh
   git clone https://github.com/Deb77/BabyAndMe.git
   ```
3. Make a .env file in the backend which has the same keys as the .env example file
   Make a file "MAP_KEY.js" in this directory client/src/Components/Utils add and export the follwing variable:
   ```sh
   export const GOOGLE_API_KEY= '';
   ```

5. Installing and running the frontend 
   ```sh
   cd client
   npm install
   npm start
   ```
4. Installing and running the backend
   ```sh
   cd backend
   virtualenv venv

   for Windows:
   source venv/Scripts/activate

   for Linux:
   source venv/bin/activate

   pip install -r requirements.txt

   python app.py
   ```

## Usage
The working parts are as follows:
1. The landing page:
 <br/><br/>
  <img src="https://i.ibb.co/0GdpBpm/screenshot-localhost-3000-2021-10-30-07-28-52.png" alt="screenshot-localhost-3000-2021-10-30-07-32-21"/><br><br>
2. An about page which features our problem statements and the solutions we've implemented
  <img src="https://github.com/Deb77/BabyAndMe/blob/main/screenshots/Screenshot3.jpg"/><br><br>
3. A crowdsourced page to help women locate comfortable and cosy places to breastfeed their babies
  <img src="https://github.com/Deb77/BabyAndMe/blob/main/screenshots/Screenshot2.jpg"/><br><br>
4. A page which lists down Lactation Management Centers with an aim to create a globalised database, 
   which displays infomation like number of bottles available in the center and other necessary details.
   Users can also send requests to hospitals inorder to get screened to be eligible to donate milk.
   <img src="https://github.com/Deb77/BabyAndMe/blob/main/screenshots/Screenshot4.jpg"/><br><br>
5. An admin panel which enables the Lactation Management Center to update the number of milk bottles available, 
  and enables the admin user to approve screening requests.
  <img src="https://github.com/Deb77/BabyAndMe/blob/main/screenshots/Screenshot5.jpg"/><br><br>
  

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
