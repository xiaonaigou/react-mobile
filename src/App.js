import React,{ Component,Fragment } from 'react';
// 引入 TabBar 标签栏
import { TabBar } from 'antd-mobile';
import "./styles/iconfont.css"

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
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            80
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-gouwuche" /> }
            selectedIcon={ <span className="iconfont icon-gouwuche" />
            }
            title="购物车"
            key="Cart"
            badge={'1'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId"
          >
            334
          </TabBar.Item>
          <TabBar.Item
            icon={ <span className="iconfont icon-weibiaoti2fuzhi12" /> }
            selectedIcon={ <span className="iconfont icon-weibiaoti2fuzhi12" />
            }
            title="我的"
            key="Mine"
            // dot  // 点
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            51
          </TabBar.Item>
          
        </TabBar>
        </div>
    </Fragment>
    );
  }
}

export default App;
