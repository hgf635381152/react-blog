import React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import IconFont from '../utils/iconfont'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Advert from '../components/Advert'
import '../styles/pages/detail.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Detail = (props) => {

  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,  // 容错
    sanitize: false,  
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)

  return (
    <>
      <Head>
        <title>无状态的博客</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频教程</Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-Blog
              </div>
              <div className="list-icon center">
                <span><IconFont type="iconriqi" />{props.addTime}</span>
                <span><IconFont type="iconshiyongjiaocheng" />{props.typeName} </span>
                <span><IconFont type="iconkeliuredu" />{props.view_count}人 </span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html: html}}
              >
              </div>
            </div>
          </div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav common-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={html}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detail.getInitialProps = async (context) => {
  console.log(context.query.id)

  let id = context.query.id

  const promise = new Promise((reslove) => {
    axios('http://localhost:7001/default/getArticleById/' + id)
    .then((res) => {
      console.log(res.data)
      reslove(res.data.data[0])
    })
  })

  return await promise
}

export default Detail
