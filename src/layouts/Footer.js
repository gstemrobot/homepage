import React, { Fragment } from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './Footer.less';

const { Footer } = Layout;

const FooterView = () => {
  const links = [
    {
      key: '服务',
      title: '服务',
      href: 'https://pro.ant.design',
      blankTarget: true,
    },
    {
      key: '我们',
      title: <Icon type="github" />,
      href: 'https://github.com/ant-design/ant-design-pro',
      blankTarget: true,
    },
    {
      key: '支持',
      title: '支持',
      href: 'https://ant.design',
      blankTarget: true,
    },
    {
      key: '联系我们',
      title: '联系我们',
      href: 'https://ant.design',
      blankTarget: true,
    },
  ];

  return (
    <Footer className={styles.footerbg}>
      <div className={styles.jianjie}>
        <Row
          type="flex"
          justify="center"
          style={{ fontFamily: 'verdana', fontSize: '150%', fontWeight: 'bold' }}
        >
          {links.map(link => (
            <Col span={4}>
              <a
                key={link.key}
                title={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                href={link.href}
              >
                {link.title}
              </a>
            </Col>
          ))}
        </Row>
        <Row type="flex" justify="center">
          <Col span={4}>
            <a>工单系统：提交工单</a>
          </Col>
          <Col span={4}>量物力机器人简介</Col>
          <Col span={4}>付款方式</Col>
          <Col span={4}>电子邮件：gstemrobot2018@163.com</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={4}>工作时间：周一到周五</Col>
          <Col span={4}>联系我们</Col>
          <Col span={4}>常见问题</Col>
          <Col span={4}>公众号</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={4}>工作时间：9：00 - 18：00</Col>
          <Col span={4}>新闻列表</Col>
          <Col span={4}>文档下载</Col>
          <Col span={4} />
        </Row>
        <Row type="flex" justify="center">
          <Col span={4} />
          <Col span={4}>加入我们</Col>
          <Col span={4}>在线文档</Col>
          <Col span={4} />
        </Row>
        <Row type="flex" justify="center">
          <Col span={4} />
          <Col span={4} />
          <Col span={4}>认证查询</Col>
          <Col span={4} />
        </Row>
      </div>
      <div>
        <GlobalFooter
          className={styles.gfooter}
          links={[
            {
              key: 'Pro 首页',
              title: 'Pro 首页',
              href: 'https://pro.ant.design',
              blankTarget: true,
            },
            {
              key: 'github',
              title: <Icon type="github" />,
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Ant Design',
              title: 'Ant Design',
              href: 'https://ant.design',
              blankTarget: true,
            },
          ]}
          copyright={
            <Fragment>
              Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
            </Fragment>
          }
        />
      </div>
    </Footer>
  );
};
export default FooterView;
