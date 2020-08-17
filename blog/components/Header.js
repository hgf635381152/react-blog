import React from 'react'
import '../styles/components/Header.css'
import { Row, Col, Menu } from 'antd'
import IconFont from '../utils/iconfont'

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">无状态</span>
        <span className="header-txt">在校学生，热爱前端学习</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <IconFont type="iconshouye" />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <IconFont type="iconshipin" />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <IconFont type="iconshenghuo" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header