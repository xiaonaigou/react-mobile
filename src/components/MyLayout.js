import React,{ Component,Fragment } from 'react';
import { TabBar } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home" /> }
            selectedIcon={<span className="iconfont icon-home" /> }
            selected={this.props.match.url === '/'}
            // badge={1}
            onPress={() => { this.props.Reacthistory.push("/") }}
            data-seed="logId"
          >
            {/* 80组件 */}
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-gouwuche" /> }
            selectedIcon={ <span className="iconfont icon-gouwuche" />
            }
            title="购物车"
            key="Cart"
            badge={'1'}
            selected={this.props.match.url === '/Cart'}
            onPress={() => { this.props.history.push("/Cart") }}
            data-seed="logId"
          >
            {/* 334组件 */}
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-weibiaoti2fuzhi12" /> }
            selectedIcon={ <span className="iconfont icon-weibiaoti2fuzhi12" />
            }
            title="我的"
            key="Mine"
            // dot  // 点
            selected={this.props.match.url === '/Mine'}
            onPress={() => { this.props.history.push("/Mine") }}
          >
            {/* 51组件 */}
            {this.props.children}
          </TabBar.Item>
          
        </TabBar>
        </div>
    </Fragment>
    );
  }
}

export default App;