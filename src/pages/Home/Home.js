import React, { PureComponent } from 'react';
import { Card, Carousel } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Home.less';

// const { Meta } = Card;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitAdvancedForm'],
}))
class Home extends PureComponent {
  render() {
    const onChange = (a, b, c) => {
      console.log(a, b, c);
    };
    return (
      <PageHeaderWrapper title="首页">
        <Card bordered={false}>
          <div>
            <Carousel afterChange={onChange}>
              <div className={styles.slickSlide}>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>

          {/* <img
            alt="key1"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <div>
            <img alt="key1" src="http://img.pipacoding.com/assets/pc/official/icon/key_1.png" />
            <img alt="key2" src="http://img.pipacoding.com/assets/pc/official/icon/key_2.png" />
            <img alt="key3" src="http://img.pipacoding.com/assets/pc/official/icon/key_3.png" />
            <img alt="key4" src="http://img.pipacoding.com/assets/pc/official/icon/key_4.png" />
          </div>
          <Card
            hoverable
            style={{ margin: 16 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card> */}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Home;
