import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import App from "./app";
import axios from "axios";
import User from "./service/user.js";

// axios 인스턴스를 만들 때 구성 기본 값 설정
const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/comments",
});
const user = new User(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>,
  document.getElementById("root")
);
