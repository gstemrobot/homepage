import { Layout, Menu } from "antd";
import Link from 'umi/link';
const { Header,  Footer } = Layout;

const App = props => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">课程体系</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/content">课程展示</Link></Menu.Item>
            <Menu.Item key="4"><a href="https://blog.918.zone/">品牌动态</a></Menu.Item>
            <Menu.Item key="5"><Link to="/about">品牌故事</Link></Menu.Item>
          </Menu>
        </Header>
        {props.children}
        <Footer style={{ textAlign: "center" }}>
          918 Maker Studio ©2018 Created by Mr Hu
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
