import { Avatar, Divider } from 'antd'
import '../styles/components/Author.css'
import IconFont from '../utils/iconfont'

const Author = () => {
  return (
    <div className="author-div common-box">
      <div><Avatar size={80} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597854000749&di=169fa4f4674e611df0ea1bf81806be33&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7aec54e736d12f2e45d21b9749c2d56284356876.jpg" /></div>
      <div className="author-introduction">
        学生，前端持续学习中，睡觉爱好者
        <Divider>社交账号</Divider>
        <Avatar size={28} className="account">
          <a href="https://github.com/hgf635381152" target="_blank" rel="noopener noreferrer"><IconFont title="https://github.com/hgf635381152" type="iconGitHub" /></a>
        </Avatar>
        <Avatar size={28} className="account account-qq">
          <IconFont type="iconQQ" />
        </Avatar>
        <Avatar size={28} className="account">
          <IconFont type="iconwechat" />
        </Avatar>
        
      </div>
    </div>
  )
}

export default Author