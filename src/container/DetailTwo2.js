/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';

export default class DetailTwo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeType(type) {
    console.log(type)
    this.setState({})
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>忘记密码</dt>
          <dd>
            <p>初始密码是123456，如果通过【销控中心-设置】修改过密码然后忘记了，请在【全国销售管理PC/APP问题反馈】微信群中进行反馈，产品人员会帮您重置密码。</p>
          </dd>
          <dd>
            <aside className="detail_choose"><a className="icon_help_top">有用（999+）</a></aside>
            <aside><a className="icon_help_bottom">没用（12）</a></aside>
          </dd>
        </dl>
      </div>
    )
  }
}
