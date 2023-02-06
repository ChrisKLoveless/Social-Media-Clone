import React from "react";
import "../index.css";
import Header from "./Header";
import UserInfo from "./UserInfo";
import NewsFeed from "./NewsFeed";
import FriendLists from "./FriendLists";
import img from "../img/PixelTwitter.jpg"


function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="content-wrap">
      <UserInfo />
      <NewsFeed />
      <FriendLists/>
      </div>
    </React.Fragment>
  );
}

export default App;
