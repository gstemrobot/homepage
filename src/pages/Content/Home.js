import React, { PureComponent } from 'react';
import { List, Avatar, Card } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitAdvancedForm'],
}))
class Page extends PureComponent {
  render() {
    const data = [
      {
        title: '7月哈利魔法班',
        link: '/content/class1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team',
      },
      {
        title: '8月机器人班',
        link: '/content/class2',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team',
      },
    ];
    return (
      <PageHeaderWrapper title="内容">
        <Card bordered={false}>
          <List
            style={{ padding: '50px' }}
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
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Page;
