import { Provider, useSelector } from 'react-redux';

import Login from './components/Login';
import appStore from './utils/appStore';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import AboutUs from './components/AboutUs';
import Sports from './components/Sports';
import Politics from './components/Politics';

const AppLayout=()=>{
  const user=useSelector(store=>store.user)
  
  return <div className="app">
  { user&& <Header />}
  <Outlet />
</div>
}
const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Login/>,    
      },
        {
          path:"/browse",
          element:<Browse/>,    
      },
      {
          path:"about",
          element:<AboutUs/>
      },
      {
          path:"sports",
          element:<Sports/>
      },
      {
        path:"politics",
        element:<Politics/>
      }

      ]
  },
  
])

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}


export default App;
