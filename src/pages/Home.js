import React,{ Component,Fragment } from "react";

import { getGoods } from "../api";
import { Carousel } from 'antd-mobile';

class Home extends Component {
    state={
        sliderlist:[],
        imgHeight:176,
    }
    componentDidMount(){
        getGoods()
        .then(res=>{
            console.log(res);   // 拦截器里返回什么,Home里就打印什么
            let { data } = res
            console.log(data);
            if(data.status===0){
                // 成功
                this.setState({ sliderlist:data.message.sliderlist });
            }
        })
    }
    render(){
        console.log("render Home");
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
                    href="#"
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
            </Fragment>
        );
    }
}

export default Home;