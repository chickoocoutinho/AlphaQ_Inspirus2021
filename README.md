<p align="center">
  <img src="https://github.com/InspirusDBCE/AlphaQ_Inspirus2021/blob/main/frontend/src/assets/Classroom_Buddy.svg" style="background-color:#000"  alt="Logo" width="80" height="80">
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
 Built for inspiration Hackathon 2021, ClassBuddy is an Advance Note Taking app which connects to your Google Classroom and fetches data of all the classes you have enrolled in along with lecture details and study Material. Our Text editor and web scraper let you create notes for lectures with the help of reference material in the form of open-source projects, book recommendations, research papers, and Google Classroom Notes. Notes created by users can be saved and later queried using our notes search feature powered by Algolia. 
 <hr/>
 
### Key Features
#### Seemless Integration with Google Classroom
Get all the classes you’ve registered for in Google Classroom  without any hassle.
#### Feature Rich Notes Taker & Web Scraper 
Feature Rich text edittor with lecture related web suggestions which let you take notes on the go. Get all Notes shared in Google Classroom along with research papers, github projects and book recommendations from our web scrapper.
#### Notes Search
Search though all the notes you created using our custom search powered by Algolia.

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

1. Get API keys, credentials as mentioned in the env_example files
2. Clone the repo
   ```sh
   git clone https://github.com/InspirusDBCE/AlphaQ_Inspirus2021.git
   ```
4. Installing and running the frontend 
   ```sh
   cd frontend
   npm install
   npm start
   ```
5. Installing and running the backend
   ```sh
   cd backend
   nodemon server.js
   ```

## Screenshots
The working parts are as follows:
1. The landing page:
 <br/><br/>
  <img src="https://i.ibb.co/DRSPGPz/screenshot-localhost-3000-2021-10-30-07-28-52.png" alt="screenshot-localhost-3000-2021-10-30-07-32-21"/><br><br>
2. A page to display courses
  <img src="https://i.ibb.co/yFY6WXB/screenshot-localhost-3000-2021-10-30-07-30-47.png"/><br><br>
3. A page built with an in house editor
  <img src="https://i.ibb.co/BwNvmBV/screenshot-localhost-3000-2021-10-30-07-31-25.png"/><br><br>
  <img src="https://i.ibb.co/0h4VsG6/screenshot-localhost-3000-2021-10-30-07-32-21.png"/><br><br> 
  

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
