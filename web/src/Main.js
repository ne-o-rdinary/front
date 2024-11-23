import { Link } from "react-router-dom";
import Button from "./common/Button";
import Option from "./option";

const Main = () => {
  return (
    <div>
      <h1>Main Page 입니다.</h1>
      <Link to="/test">Test Page로 이동</Link>
      <Button color={"#00CD80"}>옵션화면</Button>
    </div>
  );
};

export default Main;
