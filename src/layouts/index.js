import { Layout, Menu, Icon } from "antd";
import Link from 'umi/link';
import styles from './index.less';

const { Header, Footer } = Layout;

const App = props => {
  return (
    <div>
      <Layout className="layout">
        <Header style={{ backgroundColor: "#ffffff" }}>
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            style={{ margin: "0px", lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link to="/"><Icon type="home" theme="outlined" />首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">课程体系</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/content">课程展示</Link></Menu.Item>
            <Menu.Item key="4"><a href="https://blog.918.zone/">品牌动态</a></Menu.Item>
            <Menu.Item key="5"><Link to="/about">品牌故事</Link></Menu.Item>
          </Menu>
        </Header>
        {props.children}
        <Footer style={{ backgroundColor: "#ffffff", textAlign: "center" }}>
          918 Maker Studio ©2018 Created by Mr Hu
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
