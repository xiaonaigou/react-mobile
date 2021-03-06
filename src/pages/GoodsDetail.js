import React,{ Component,Fragment } from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import { getGoodsInfo } from '../api';

class GoodsDetail extends Component {
    state = {
        // 轮播图数组
        imglist:[],
        // 商品详细信息
        goodsinfo:{}
    }
    componentDidMount(){
        // 1. 在路由对象上
        const {id} = this.props.match.params;
        getGoodsInfo(id)
        .then(res=>{
            let { data } = res;
            // console.log(123);
            // console.log(data);
            if(data.status===0){
                this.setState({
                    imglist:data.message.imglist,
                    goodsinfo:data.message.goodsinfo
                })
            }
            // console.log(data.message.imglist);
            console.log(data.message.goodsinfo);
        })
    }
 render(){
     return(
         <Fragment>
             {/* 头部导航 start */}
            <div>
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
            >商品详情</NavBar>
            </div>
            {/* 头部导航 end */}

            {/* 轮播图 start */}
            <Carousel
          autoplay
          infinite
        >
          {this.state.imglist.map(val => (
            <a
              key={val}
              href="javascript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.original_path}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
            {/* 轮播图 end */}

            {/* 商品信息 start */}
            <div className="goods_info">
            {/* {console.log(this.state.goodsinfo)} */}
                <div className="goods_title">{this.state.goodsinfo.title}</div>
                <div className="goods_price">
                    <span className="market_price">{this.state.goodsinfo.market_price}</span>
                    <span className="sell_price">{this.state.goodsinfo.sell_price}</span>
                </div>
                <div className="goods_detail_title">商品参数</div>
                <div className="goods_detail_id">商品编号：{this.state.goodsinfo.id}</div>
                <div className="stock_quantity">商品库存：{this.state.goodsinfo.stock_quantity}</div>
                <div className="update_time">上架时间：{this.state.goodsinfo.update_time}</div>
                {/* 图文详情 */}
                <div className="goods_detail_content" dangerouslySetInnerHTML={{__html:this.state.goodsinfo.content}}>
                    {/* 把字符串变成标签渲染 */}
                </div>
                <style jsx>{`
                    .goods_info{
                        padding: 10px;
                        margin-bottom:40px;
                        background-color: #fff;
                        .goods_title{
                            padding:5px 0;
                            font-size: 15px;
                            color: #666;
                        }
                        .goods_price{
                            padding:5px 0;
                            display: flex;
                            justify-content: space-between;
                            .market_price{
                                font-size: 15px;
                                color:red;
                            }
                            .sell_price{
                                color:#ccc;
                                text-decoration: line-through;
                            }
                        }
                        .goods_detail_title{
                            padding:5px 0;
                            font-size: 14px;
                            font-weight: 500;
                            color:#333;
                        }
                        .goods_detail_id{
                            padding:5px 0;
                            font-size: 14px;
                            color:#666;
                        }
                        .stock_quantity{
                            padding:5px 0;
                            font-size: 14px;
                            color:#666;
                        }
                        .update_time{
                            padding:5px 0;
                            font-size: 14px;
                            color:#666;
                        }
                    }
                `}
                </style>
            </div>
            {/* 商品信息 end */}

            {/* 底部工具栏 start */}
            <div className="btm_tool">
                <div className="btn_item btm_kefu">
                    <span className="iconfont icon-kefu"></span>
                    <p>客服</p>
                </div>
                <div className="btn_item btm_cart">
                    <span className="iconfont icon-gouwuche"></span>
                    <p>购物车</p>
                    <span className="badge">2</span>
                </div>
                <div className="btn_item btm_cart_add">
                    加入购物车
                </div>
                <div className="btn_item btm_buy">
                    立即购买
                </div>
                <style jsx>{`
                    .btm_tool{
                        display:flex;
                        position: fixed;
                        height: 40px;;
                        width: 100%;
                        background-color: #fff;
                        left:0;
                        bottom: 0;
                        .btn_item{
                            flex:1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        .btm_kefu{}
                        .btm_cart{
                            position: relative;
                            .badge{
                                position: absolute;
                                top:0;
                                left:50%;
                                background-color: orangered;
                                border-radius: 30px;
                                color:white;
                                font-size: 12px;
                                padding:0 4px;
                            }
                        }
                        .btm_cart_add{
                            flex:2;
                            background:orange;
                        }
                        .btm_buy{
                            flex:2;
                            background:orangered;
                        }
                    }
                `}
                </style>
            </div>
            {/* 底部工具栏 end */}
         </Fragment>
     )
 }
}

export default GoodsDetail;