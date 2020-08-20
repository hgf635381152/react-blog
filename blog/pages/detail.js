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
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/api'



const Detail = (props) => {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>` 
  }

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
                <Breadcrumb.Item><a href="/">博客首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频教程</Breadcrumb.Item>
                <Breadcrumb.Item>生活日常</Breadcrumb.Item>
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
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detail.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((reslove) => {
    axios(servicePath.getArticleById + id)
    .then((res) => {
      console.log(res.data)
      reslove(res.data.data[0])
    })
  })
  return await promise
}

export default Detail
