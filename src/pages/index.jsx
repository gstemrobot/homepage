// import { Rate } from 'antd';
import styles from './index.less'
const App = props => {
  const Head = () => {
    return (
      <div id="head">
        <div class="layout">
          <div class="logo" />
          <img src="http://img.pipacoding.com/assets/pc/official/large/logo2.png" alt="这是一个logo" />
        </div>
        <div class="children animated fadeInUp">
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_1.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_2.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_3.png" />
          <img src="http://img.pipacoding.com/assets/pc/official/icon/key_4.png" />
        </div>
      </div>);
  };

  return (<div>{ Head() }</div>);
}

export default App;