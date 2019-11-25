import React from 'react'
import Loadable from 'react-loadable'
// import Loading from './my-loading-component';
 
const LoadableDetail = Loadable({
    loader: () => import('./detail'),
//   loading: Loading,
    loading(){
        return <div>正在加载中...</div>
    }
});
 
export default ()=><LoadableDetail/>




// 使用 React.Suspense 显然代码更为优雅。
const johanComponent = React.lazy(() => import('./xxx'));
 
export const johanAsyncComponent = props => (
  <React.Suspense fallback={<div>加载中。。</div>}>
    <johanComponent {...props} />
  </React.Suspense>
);
// 我们使用React.lazy封装动态import，类似于第一个示例中的'loading'参数。
// 我们定义一个React.Suspense组件，其中包含一组fallback JSX，以便在我们等待异步加载时进行渲染。 通常，这将是一个微调器或其他等待指示器。 
// 我们定义了一些 children 的 JSX，这些都是使用 React.lazy 包含的组件。