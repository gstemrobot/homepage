import React from 'react'
import { Icon, Layout } from 'antd';
import { connect } from 'dva';
import styles from './404.less'

const { Content } = Layout;

export default connect()(({ dispatch }) => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className={styles.error}>
        <Icon type="frown-o" />
        <h1>404 Not Found</h1>
      </div>
    </Content>);
});
