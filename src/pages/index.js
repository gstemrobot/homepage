import { Card } from 'antd';
// import styles from './index.css'

const { Meta } = Card;

const App = props => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  const Head = () => {
    return (
      <div>
        <div>
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_1.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_2.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_3.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_4.png" />
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
      </div>);
  };

  return (<div>{ Head() }</div>);
}

export default App;