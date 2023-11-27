import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContianer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import InputIceCreamContainer from './components/InputIceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <div className="container my-3">
     <Provider store={store}>
        <div className='row'>
          <div className='col-6'>
            <h1 className='mb-4 text-center'>Cake Shop</h1>
            <h2>Redux using connect:</h2>
            <CakeContainer /><hr />
            <h2>Redux using Hooks:</h2>
            <HookCakeContianer /><hr />
            <h2>Redux using CombineReducer:</h2>
            <IceCreamContainer /><hr />
            <h2>Redux using Input:</h2>
            <InputIceCreamContainer /><hr />
            <h2>Redux using OwnProps:</h2>
            <ItemContainer cake />
            <ItemContainer />
          </div>
          <div className='col-6'>
            <UserContainer />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
