import { useState, useEffect, useRef } from "react";
const Carosal = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?.limit=6")
      .then((res) => res.json())
      .then((data) => setData(data?.products));
  }, []);

  const startInterval = () => {
    clearInterval(ref.current); // Clear any existing interval FIRST!
    ref.current = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === data.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    startInterval(); // Start the interval initially
    return () => clearInterval(ref.current); // Clear on unmount
  }, []);

  const handleNext = () => {
    // No changes needed here
    setIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const handlePrev = () => {
    setIndex((prevIndex) => {
      if (index === 0) {
        return data?.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  return (
    <div
      className="container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => startInterval()}
    >
      <button className="leftbtn" onClick={handlePrev}>
        {"<"}
      </button>
      <img src={data[index]?.images[0]} alt="pic" />
      <button onClick={handleNext} className="rightbtn">
        {">"}
      </button>
      {/* <div className="dots">
        <div className="dot" onClick={handleNext}></div>
        <div className="dot" onClick={handleNext}></div>
        <div className="dot" onClick={handleNext}></div>
      </div> */}
    </div>
  );
};
export default Carosal;
