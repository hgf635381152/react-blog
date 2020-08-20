import React, { useState, useEffect } from 'react'
import '../styles/components/Header.css'
import { Row, Col, Menu } from 'antd'
import IconFont from '../utils/iconfont'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/api'

const Header = () => {

  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key == 1) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">无状态</span>
          <span className="header-txt">在校学生，热爱前端学习</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id}>
                    <IconFont type={item.icon} />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
  


export default Header