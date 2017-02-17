#Flash card app demo
####tags: React,Redux,ES6,express

####展示:[flash card demo](https://flashcard-app-alok.herokuapp.com/)
# Features
1. **创建卡片库和卡片**
1. **在卡片库内搜索卡片**
1. **学习模式应用spaced repetition理论**

# 学习笔记
1. 使用redux来合并[reducers](https://github.com/Aloklok/react/blob/master/flashcard-app/src/reducers.js)于一个状态树称作store

1. 使用 [react-redux](https://github.com/reactjs/react-redux)全局环境下，将部分状态树和actionsz作为props传给components
这避免了嵌套地传递state到components（A->B->C变为A->C）。因此被传递props的组件由表现型组件变为一个容器组件。

1. [表现型组件和容器组件](https://medium.com/@learnreact/container-components-c0e67432e005#.llyv729ol)被区分，为了能够重复使用表现型组件。
更多 : [smart-and-dumb-components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.b74468pn0)

1. 使用[react-router](https://github.com/ReactTraining/react-router) 来使UI和和URL同步，因为组件需要URL参数来处理data
使用[react-router-redux](https://github.com/reactjs/react-router-redux) 来复制当前URL位置，并隐藏在state中，因此能够在容器组件中fetch到URL。
1. 使用 [express](http://expressjs.com/)作为服务器 
