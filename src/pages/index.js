import { Card, Layout } from 'antd';
// import styles from './index.css'

const { Meta } = Card;
const { Content } = Layout;

const App = props => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  const Head = () => {
    return (
      <div>
        <Content style={{ padding: "0px" }}>
          <img alt="key1" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          <div>
            <img alt="key1" src="http://img.pipacoding.com/assets/pc/official/icon/key_1.png" />
            <img alt="key2" src="http://img.pipacoding.com/assets/pc/official/icon/key_2.png" />
            <img alt="key3" src="http://img.pipacoding.com/assets/pc/official/icon/key_3.png" />
            <img alt="key4" src="http://img.pipacoding.com/assets/pc/official/icon/key_4.png" />
          </div>
          <Card
            hoverable
            style={{ margin: 16 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </Content>
      </div>);
  };

  return (<div>{ Head() }</div>);
}

export default App;