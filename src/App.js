import React from 'react';
// 引入button按钮组件
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      {/* 组件代码 */}
      <Button>default</Button><WhiteSpace />
      <Button disabled>default disabled</Button><WhiteSpace />

      <Button type="primary">primary</Button><WhiteSpace />
      <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

      <Button type="warning">warning</Button><WhiteSpace />
      <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
    </div>
  );
}

export default App;
