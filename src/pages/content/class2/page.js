import { connect } from 'dva';
import { Timeline } from 'antd';
import styles from './page.less';

function App({dispatch}) {
  return (
    <div className={styles.normal}>
      <h2>机器人</h2>
      <Timeline mode="alternate">
        <Timeline.Item>
          <h4>2018-09-03 机器人课</h4>
          <p> 传送带 </p>
          <video controls autoplay preload="auto" width="400" height="300">
            <source src="https://gstemrobot-1256178848.cos.ap-chengdu.myqcloud.com/2018/09/04/class1robot/GOPR0035_1535977240195_high.MP4" type="video/mp4" />
          </video>
        </Timeline.Item>
        <Timeline.Item>
          <h4>2018-07-17 机器人课</h4>
          <p> 三轮传送带 </p>
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/cd487014e7d9108d172fad165d143abd?fid=2685614332-250528-742178274239877&time=1536123600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-y7FiG8G1l93zrxqjXfdTK6CTwrU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742029149055034584&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/d8852e0c5f526a85e317d86d5235aca5?fid=2685614332-250528-909083691362431&time=1536123600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-fs5bvtbcZll1%2FqZucZ1xiKwJ5Gw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742039352249607079&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/e5b562ec868f8dd6b3855b59f98c895e?fid=2685614332-250528-450677314659983&time=1536123600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-VvD9rd04cR8IwI4vUWxFIktZey4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742058465346092883&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/29f2e4fc8bfccb9023b6ca252d8ff427?fid=2685614332-250528-734240159447676&time=1536123600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-atXEiMIIc%2BkxzIJxYIe8Q02bVDM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742070594832441282&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
        </Timeline.Item>
        <Timeline.Item>
          <h4>2018-07-12 机器人课</h4>
          <p> 三轮传送带 </p>
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/182a423813fd68b632e08425044e7ea7?fid=2685614332-250528-437015251427014&time=1536123600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lD0Ttxstr6%2FIIs9Oi2Jee3eYHlY%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742148105130491518&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/6d6edce2f0e60171346e70ac76b012a6?fid=2685614332-250528-188370680725040&time=1536127200&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-sEONd0ssgFK2W5nHYzhL0h9dlcY%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742157323954399055&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/a29aa52a8697ee7ec9d1f4c8985ab4c2?fid=2685614332-250528-404254520970804&time=1536127200&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-2qRmTXOlGfsJWe3kBiJU0yu%2FwSc%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5742164228691966786&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default connect(({example1})=>({example1}))(App)
