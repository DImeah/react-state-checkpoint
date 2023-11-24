import { Menu } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  HomeFilled,
} from "@ant-design/icons";

const homeItem = [
  {
    icon: <HomeFilled />,
    label: (
      <a href="#index.html" target="_blank" rel="noopener noreferrer">
        Home Page
      </a>
    ),
  },
];

const linkItems = [
  {
    icon: <GithubFilled />,
    label: (
      <a
        href="https://github.com/DImeah"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    ),
  },

  {
    icon: <LinkedinFilled />,
    label: (
      <a
        href="https://www.linkedin.com/in/dornubari-imeah-8a9928ab/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    ),
  },

  {
    icon: <FacebookFilled className="stroke-1 hover:stroke-2" />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    ),
  },
];

const Navbar = () => {
  //const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    //setCurrent(e.key);
  };

  return (
    <>
      <div className="flex justify-center shadow-2xl">
        <div className="space-x-4">
          <Menu
            onClick={onClick}
            // selectedKeys={[current]}
            // mode="horizontal"
            items={homeItem}
          />
        </div>
        <div className="w-fit">
          <Menu
            onClick={onClick}
            // selectedKeys={[current]}
            mode="horizontal"
            items={linkItems}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
