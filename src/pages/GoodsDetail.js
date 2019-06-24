import React,{ Component,Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class GoodsDetail extends Component {
 render(){
     return(
         <Fragment>
             <div>
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
            >商品详情</NavBar>
        </div>
         </Fragment>
     )
 }
}

export default GoodsDetail;