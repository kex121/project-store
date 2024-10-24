import React from "react";
import "./MainPage.css";

function App() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="background.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео-теги.
      </video>
      <div className="content-container text-center text-light d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1 className="display-4">Каждый день мы радуем вас качественным кофе</h1>
        <p className="lead">И бесплатно доставляем по всей России</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-light m-2">Кофе для эспрессо</button>
          <button className="btn btn-outline-light m-2">Кофе для фильтра</button>
          <button className="btn btn-outline-light m-2">Аксессуары</button>
        </div>
      </div>
    </div>
  );
}

export default App;
