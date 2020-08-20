import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import IconFont from '../utils/iconfont'
import Header from '../components/Header'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/api'
import Link from 'next/link'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const MyList = (list) => {

  const [mylist, setMylist] = useState(list.data)
  useEffect(() => {
    setMylist(list.data)
  })

  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,  // 容错
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  return (
    <>
      <Head>
        <title>无状态的博客</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>

          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              <Breadcrumb.Item>生活日常</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><IconFont type="iconriqi" />{item.addTime}</span>
                  <span><IconFont type="iconshiyongjiaocheng" />{item.typeName}</span>
                  <span><IconFont type="iconkeliuredu" />{item.view_count}人  </span>
                </div>
                <div className="list-content"
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                >
                </div>
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

MyList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id)
      .then(res => {
        resolve(res.data)
      })
  })
  return await promise
}

export default MyList

