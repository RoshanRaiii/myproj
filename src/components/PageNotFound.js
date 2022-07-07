import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';
const PageNotFound = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 300,
    }}
    description={
      <span>
         <h1>404 page not found</h1>
      </span>
    }
  >
          <Link to="/" ><Button type="primary">Home</Button> </Link>
  </Empty>
);

export default PageNotFound;