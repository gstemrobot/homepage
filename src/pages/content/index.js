import { List, Avatar, Layout } from 'antd';
import Link from 'umi/link';

const { Content } = Layout;

const App = props => {
  const data = [
    {
      title: "7月哈利魔法班",
      link: '/content/class1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: "8月机器人班",
      link: '/content/class2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
  ];
  return (
    <div>
      <Content style={{ padding: "50px" }}>
        <List
          style={{ padding: "50px" }}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<Link to={item.link}>{item.title}</Link>}
                description={item.description}
              />
              
            </List.Item>
          )}
        />
      </Content>
    </div>
  );
};
export default App;
