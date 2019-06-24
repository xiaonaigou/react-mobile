import axios from "axios";

// 统一请求前缀
axios.defaults.baseURL="http://react.zbztb.cn/site/";

// axios拦截器
// 发送前调用一个事件拦截器
// 发送回来调用一个事件拦截器
// 添加相应拦截器
axios.interceptors.response.use(function (response){
    console.log(response);    // 拦截器里返回什么,Home里就打印什么
    return response;
},function (error){
    // 对响应错误做点什么
    return Promise.reject(error);
})

// 1. 获取轮播图数据
export const getGoods =()=>axios.get("goods/gettopdata/goods");
// 2. 获取商品列表数据
export const getGoodsGroup =()=>axios.get("goods/getgoodsgroup");