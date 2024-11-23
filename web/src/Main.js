import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main Page 입니다.</h1>
      <Link to="/test">Test Page로 이동</Link>
    </div>
  );
};

export default Main;
