"use client"

import { useEffect, useState } from "react";
import "./cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // Mouse konumunu takip etmek için değişkenler
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Mouse hareketini takip etmek için olay dinleyici ekleyin
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Takip edilecek elementi pürüzsüz bir şekilde taşımak için animasyon çerçevesi kullanın
    function updateFollowerPosition() {
      console.log(mouseX, mouseY);
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const circleSize = 50;
      const dx = (mouseX - followerX) / 10; // X ekseni için hareket
      const dy = (mouseY - followerY) / 10; // Y ekseni için hareket
      followerX += dx;
      followerY += dy;

      if (followerX < circleSize / 2) followerX = circleSize / 2;
      if (followerX > windowWidth - circleSize / 2)
        followerX = windowWidth - circleSize / 2;
      if (followerY < circleSize / 2) followerY = circleSize / 2;
      if (followerY > windowHeight - circleSize / 2)
        followerY = windowHeight - circleSize / 2;

      setPosition({
        x: followerX,
        y: followerY,
      });

      // Takip edilecek elementin konumunu güncelleyin

      // Bir sonraki çerçeveyi isteyin
      requestAnimationFrame(updateFollowerPosition);
    }
    // Animasyonu başlatın
    updateFollowerPosition();
  }, []);
  return (
    <div
    className="circle"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
    }}
  />
  )
}