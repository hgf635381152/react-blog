import { Avatar, Divider } from 'antd'
import '../styles/components/Author.css'
import IconFont from '../utils/iconfont'

const Author = () => {
  return (
    <div className="author-div common-box">
      <div><Avatar size="100" src="https://i1.hdslb.com/bfs/face/e4f41c57967cad034c4845e57214c53a8a1741f7.jpg" /></div>
      <div className="author-introduction">
        学生，前端持续学习中，睡觉爱好者
        <Divider>社交账号</Divider>
        <Avatar size={28} className="account">
          <IconFont type="iconGitHub" />
        </Avatar>
        <Avatar size={28} className="account">
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