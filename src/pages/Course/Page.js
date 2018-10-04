import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import yay from '@/assets/yay.jpg';

@connect(({ about }) => ({
  about,
}))
class Page extends PureComponent {
  render() {
    const { about } = this.props;
    return (
      <PageHeaderWrapper title="">
        <Card bordered={false}>
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
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Page;
