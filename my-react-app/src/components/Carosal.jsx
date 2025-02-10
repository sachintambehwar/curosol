import { useState, useEffect, useRef } from "react";
const Carosal = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data?.products));
  }, []);
  useEffect(() => {
    ref.current = setInterval(handleNext, 2000);
    return () => clearInterval(ref.current);
  }, []);
  const handleNext = () => {
    if (index === data?.length - 1) {
      setIndex(0);
    }
    setIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(data?.length - 1);
    }
    setIndex((prev) => prev - 1);
  };
  return (
    <div
      className="container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 2000);
      }}
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
