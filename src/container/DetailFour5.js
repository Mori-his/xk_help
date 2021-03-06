/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';

export default class DetailFour5 extends Component {
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
          <dt>如何通过销控APP直接给经纪人打电话或发短信</dt>
          <dd>
            <p>点击经纪人头像即可</p>
            <div><img src="../img/451" alt="如何通过销控APP直接给经纪人打电话或发短信"/></div>
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
