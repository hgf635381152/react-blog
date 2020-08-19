import React, { useState } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List } from 'antd'
import axios from 'axios'
import IconFont from '../utils/iconfont'
import Header from '../components/Header'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../styles/pages/index.css'


const Home = (list) => {

  const [mylist, setMylist] = useState(list.data)

  return (
    <>
      <Head>
        <title>无状态的博客</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname: '/detail', query: {id: item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><IconFont type="iconriqi" />{item.addTime}</span>
                  <span><IconFont type="iconshiyongjiaocheng" />{item.typeName}</span>
                  <span><IconFont type="iconkeliuredu" />{item.view_count}人 </span>
                </div>
                <div className="list-content">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://localhost:7001/default/getArticleList')
    .then(res => {
      console.log('---------------', res.data)
      resolve(res.data)
    })
  })
  return await promise
}


export default Home
