import { Link } from "react-router-dom";
import Button from "./common/Button";

const Main = () => {
  return (
    <div>
      <h1>Main Page 입니다.</h1>
      <Link to="/test">Test Page로 이동</Link>
      <Button color={"#00CD80"}>회고하기</Button>
      <Button color={"#FF6767"}>회고하기</Button>
    </div>
  );
};

export default Main;
