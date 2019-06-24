import React,{ Component,Fragment } from "react";
// withRouter可以让Home组件获取到路由信息对象 history和match
import { withRouter } from "react-router-dom";
import { getGoods,getGoodsGroup } from "../api";
import { Carousel } from 'antd-mobile';

class Home extends Component {
    state={
        // 轮播图
        sliderlist:[],
        // 推荐商品
        toplist:[],
        // 商品列表
        goodsGroupList:[],
        imgHeight:176,
    }
    componentDidMount(){
        getGoods()
        .then(res=>{
            console.log(res);   // 拦截器里返回什么,Home里就打印什么
            let { data } = res
            if(data.status===0){
                // 成功
                this.setState({ sliderlist:data.message.sliderlist });
                this.setState({ toplist:data.message.toplist });
            }
        })

        //首页商品列表
        getGoodsGroup()
        .then(res=>{
            let { data } = res
            console.log(data);
            if(data.status===0){
                this.setState({ goodsGroupList:data.message });
            }
        })
    }
    render(){
        // console.log("render Home");
        // console.log(this.props);
        return( 
            <Fragment>
                {/* 轮播图 start */}
                <Carousel
                autoplay
                infinite
                >
                {this.state.sliderlist.map(val => (
                    <a
                    key={val.id}
                    href="javascript:;"
                    onClick={()=>this.props.history.push("/GoodsDetail/" + val.id)}
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={val.img_url}
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

                {/* 推荐商品 start */}
                <div className="recommend_goods">
                    <div className="recommend_goods_title">推荐商品</div>
                    <div className="recommend_goods_content">
                        {this.state.toplist.map(v=>
                            <a key={v.id} href="javascript:;" onClick={()=>this.props.history.push("/GoodsDetail/" + v.id)} className="recommend_goods_item">
                                <div className="recommend_img_wrap"><img src={v.img_url} alt="" /></div>
                                <div className="recommend_goods_name">
                                    <p>{v.title}</p>
                                </div>
                            </a>
                        )}
                    </div>
                    <style jsx>{`.recommend_goods{
                        .recommend_goods_title{
                            padding:10px;
                            font-size:14px;
                            font-weight: 500;
                            background-color: #f5f5f5;
                        }
                        .recommend_goods_content{
                            .recommend_goods_item{
                                display: flex;
                                background-color: #fff;
                                border-bottom:1px solid #666;
                                :last-child{
                                    border-bottom:1px solid transparent;
                                }
                                .recommend_img_wrap{
                                    flex:1;
                                    padding:10px;
                                    img{}
                                }
                                .recommend_goods_name{
                                    flex:6;
                                    display:flex;
                                    align-items:center;
                                    font-size:14px;
                                    
                                    overflow: hidden;
                                    p{
                                        text-overflow:ellipsis;
                                        overflow:hidden;
                                        white-space:nowrap;
                                    }
                                }
                            }
                        }
                    }                      
                    `}
                    </style>
                </div>
                {/* 推荐商品 end */}
                
                {/* 商品列表 start */}
                <div className="goods_group">
                    {this.state.goodsGroupList.map(v1=>
                        <div key={v1.level1cateid} className="goods_group_item">
                            <div className="goods_group_item_title">{v1.catetitle}</div>
                            <div className="goods_group_item_content">
                                {v1.datas.map(v2=>
                                    // console.log(v1.datas);
                                    <a href="javascript:;" onClick={()=>this.props.history.push("/GoodsDetail/"+ v2.artID)} key={v2.artID} className="goods_item">
                                        <img src={v2.img_url} alt="" />
                                        <div className="artTitle">{v2.artTitle}</div>
                                        <div className="goods_price">
                                            <span className="sell_price">{v2.sell_price}</span>
                                            <span className="market_price">{v2.market_price}</span>
                                        </div>
                                        <div className="goods_num">
                                            热卖中 <span className=";">{v2.stock_quantity}</span>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                        )}
                        <style jsx>
                            {`
                            .goods_group{
                                .goods_group_item{
                                    .goods_group_item_title{
                                        padding:10px;
                                        background-color: #f5f5f5;
                                        font-size:14px;
                                    }
                                    .goods_group_item_content{
                                        display: flex;
                                        flex-wrap: wrap;
                                        .goods_item{
                                            width:50%;
                                            padding: 10px;
                                            background-color: #fff;
                                            border-bottom:1px solid #666;
                                            &:nth-child(odd){
                                                // odd 奇数
                                                border-right:1px solid #666;
                                            }
                                            img{}
                                           .artTitle{
                                               font-size: 14px;
                                               display: -webkit-box;
                                               overflow: hidden;
                                               white-space: normal!important;
                                               text-overflow: ellipsis;
                                           } 
                                           .goods_price{
                                               display: flex;
                                               justify-content: space-between;
                                               .sell_price{
                                                   color:red;
                                                   font-size: 14px;
                                               }
                                               .market_price{
                                                   color:#666;
                                                   font-size: 12px;
                                                   text-decoration: line-through;
                                               }
                                           }
                                           .goods_num{
                                               .stock_quantity{}
                                           }
                                        }
                                    }
                                }
                            }
                            `}
                        </style>
                </div>
                {/* 商品列表 end */}
            </Fragment>
        );
    }
}

export default withRouter(Home);