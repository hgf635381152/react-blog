import React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'


const Detail = () => (
  <>
    <Head>
      <title>无状态的博客</title>
    </Head>
    <Header />
    <Row className="common-main" type="flex" justify="center">
      <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        左侧
      </Col>
      <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
  </>
)
export default Detail
