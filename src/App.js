import React,{ Component,Fragment } from 'react';
import MyLayout from "./components/MyLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import GoodsDetail from "./pages/GoodsDetail";

import { HashRouter as Router,Link,Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* 内容 */}
          {/* component属性,通过this.props.match获取路由信息,无法接受父组件传递的私人数据 */}
          {/* render 传递参数 + this.props.match ,可以接收父组件传递的私人数据 */}
          <Route path="/" exact render={ (props)=> <MyLayout {...props}><Home /></MyLayout> }/>
          <Route path="/Cart" render={ (props)=> <MyLayout {...props}><Cart /></MyLayout> }/>
          <Route path="/Mine" render={ (props)=> <MyLayout {...props}><Mine /></MyLayout> }/>
          {/* 商品详情 */}
          <Route path="/GoodsDetail/:id" component={GoodsDetail} />
        </Router>
    </Fragment>
    );
  }
}

export default App;