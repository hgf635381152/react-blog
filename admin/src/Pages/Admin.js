import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import '../styles/Admin.css'
import IconFont from '../utils/iconfont'
import 'antd/dist/antd.css'
import { Route } from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin(props) {

  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  const handleClickArticle = e => {
    console.log(e.item.props)
    if (e.key == 'addArticle') {
      props.history.push('/admin/add')
    } else {
      props.history.push('/admin/list')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <IconFont type="icongongzuotai" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <IconFont type="iconicon--tianjia" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <IconFont type="iconzuixinwenzhang_huaban" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="ArticleList">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <IconFont type="iconhuabanfuben" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Route path="/admin" exact component={AddArticle} />
              <Route path="/admin/add/" exact component={AddArticle} />
              <Route path="/admin/list/" exact component={ArticleList} />
              <Route path="/admin/add/:id" exact component={AddArticle} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>wuzhuangtai.com</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin