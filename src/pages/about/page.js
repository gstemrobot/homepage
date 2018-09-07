import { connect } from "dva";
import {
  Row, 
  Col,
  Layout
 } from "antd";
import styles from "./page.less";
import yay from "../../assets/yay.jpg";

const { Content } = Layout;

function App(props) {
  const { about } = props;
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className={styles.normal}>
        <Row>
          <Col span={12}>
            <img src={yay} alt="" />
          </Col>
          <Col span={12}>
            <h2>{about.title}</h2>
            <h2>电话</h2>
            <p>0816-22022</p>
          </Col>
        </Row>
      </div>
    </Content>);
}

export default connect(state => {
  return {
    about: state.about
  };
})(App);
