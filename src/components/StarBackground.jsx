import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1px and 4px
        x: Math.random() * 100, // X position as a percentage
        y: Math.random() * 100,// Y position as a percentage
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Animation duration between 2s and 6s
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px", // Size in pixels
            height: star.size + "px", // Size in pixels
            left: star.x + "%", // X position as a percentage
            top: star.y + "%", // Y position as a percentage
            opacity: star.opacity, // Opacity between 0.5 and 1
            animationDuration: star.animationDuration + "s", // Animation duration in seconds
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px", // Size in pixels, scaled for visibility
            height: meteor.size * 2 + "px", // Height for the meteor trail
            left: meteor.x + "%", // X position as a percentage
            top: meteor.y + "%", // Y position as a percentage
            animationDelay: meteor.delay, // Delay for the animation
            animationDuration: meteor.animationDuration + "s", // Animation duration in seconds
          }}
        />
      ))}
    </div>
  );
};