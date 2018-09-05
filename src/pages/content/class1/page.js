import { connect } from 'dva';
import { Timeline } from 'antd';
import styles from './page.less';

function App({example1,dispatch}) {
  const {list,text} = example1;
  const exampleData = {
    list:list,
    handleClick:() => {
      dispatch({
        type: 'example1/delete',
        payload: {
        },
      })
    }
  }
  return (
    <div className={styles.normal}>
      <h2>
        {text}
      </h2>
      <Timeline mode="alternate">
        <Timeline.Item>
          <h4>2018-07-15 魔法科学课</h4>
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/bba696504f2884f5b8e34af58358446a?fid=2685614332-250528-465986507429838&time=1536069600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-1SBmQMT0ZlvQQT1HVMzB8K6au4g%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5727134646926932614&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/1b32b351bdf8f46feabe2447f1202f3c?fid=2685614332-250528-836939094054579&time=1536069600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-T5t6fzUnpXsdp35ufgkwANDXrss%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5727181319277568671&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/f38d6064897530a0213b717e6b734184?fid=2685614332-250528-603639157525130&time=1536069600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-i50VY3ZjZ3UsBdDKUaPkZdNtQcs%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5727283529100046936&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          <img alt="example" src="https://thumbnail0.baidupcs.com/thumbnail/c68e5624a618673e3a0795b3f78bd7be?fid=2685614332-250528-215472231022915&time=1536069600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2BJCpHkvDT8nOrboyl%2FDOh2G7iCY%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5727299029067773376&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" />
          
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default connect(({example1})=>({example1}))(App)
