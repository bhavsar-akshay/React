import React, {useReducer} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UseStateHook from './Components/UseStateHooks/UseStateHook';
import UseStateHookTwo from './Components/UseStateHooks/UseStateHookTwo';
import UseStateHookFour from './Components/UseStateHooks/UseStateHookFour';
import UseStateHookThree from './Components/UseStateHooks/UseStateHookThree';

import ClassCounter from './Components/UseEffectsHooks/ClassCounter';
import UseEffectHook from './Components/UseEffectsHooks/UseEffectHook';
import MousePosition from './Components/UseEffectsHooks/MousePosition';
import DisplayMousePosition from './Components/UseEffectsHooks/DisplayMousePosition';

import UseReducerCounterOne from './Components/UseReducerHook/UseReducerCounterOne';
import UseReducerCounterTwo from './Components/UseReducerHook/UserReducerCounterTwo';
import UseReducerCounterThree from './Components/UseReducerHook/UseReducerCounterThree';

import ComponentA from './Components/UseReducer_UseContext/ComponentA';
import ComponentB from './Components/UseReducer_UseContext/ComponentB';
import ComponentC from './Components/UseReducer_UseContext/ComponentC';

import Parent from './Components/UseCallbackHook/Parent';

import Counter from './Components/UseMemoHook/Counter';

import FocusInput from './Components/UseRefHook/FocusInput';
import ClassTimer from './Components/UseRefHook/ClassTimer';
import HookTimer from './Components/UseRefHook/HookTimer';

import DocTitleOne from './Components/CustomeHook/DocTitleOne';
import DocTitleTwo from './Components/CustomeHook/DocTitleTwo';
import CounterOne from './Components/CustomeHook/CounterOne';
import CounterTwo from './Components/CustomeHook/CounterTwo';
import UserForm from './Components/CustomeHook/UserForm';

import IntervalCounter from './Components/IntervalCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import TodoApp from './Components/TodoApp';

export const CountContext = React.createContext();

const initialCount = 0;

const reducer = (state, action) => {
    switch(action){
        case  'increment' :
            return state + 1; 
        case 'decrement' :
            if(state <= 0){
                return initialCount;
            }else
                return state - 1;
        case 'reset' :
            return initialCount;
        default:
            return initialCount;
    }
}



function App() {
  const [count, dispatch] = useReducer(reducer,initialCount);

  return (
    // <CountContext.Provider value={{countState:count,countDisptch:dispatch}}>
    //     <div className="App">
    //         <h2>Count: {count}</h2>
    //         <ComponentA></ComponentA><br/>
    //         <ComponentB></ComponentB><br/>
    //         <ComponentC></ComponentC>

    //         {/* <UseStateHook></UseStateHook>
    //         <br />
    //         <UseStateHookTwo></UseStateHookTwo>
    //         <br/>
    //         <UseStateHookThree></UseStateHookThree>
    //         <br/>
    //         <UseStateHookFour></UseStateHookFour> */}

    //         {/* <ClassCounter></ClassCounter> */}
    //         {/* <UseEffectHook></UseEffectHook>
    //         <MousePosition></MousePosition> */}
    //         {/* <DisplayMousePosition></DisplayMousePosition> */}
    //         {/* <IntervalCounter></IntervalCounter>
    //         <IntervalHookCounter></IntervalHookCounter> */}

    //         {/* <UseReducerCounterOne></UseReducerCounterOne>
    //         <UseReducerCounterTwo></UseReducerCounterTwo>
    //         <UseReducerCounterThree></UseReducerCounterThree> */}                                        
    //     </div>
    // </CountContext.Provider>
    <div className="App">
        {/* <DataFetchingOne></DataFetchingOne>
        <DataFetchingTwo></DataFetchingTwo> */}
        {/* <Parent></Parent> */}
        {/* <Counter></Counter> */}
        {/* <FocusInput></FocusInput> */}
        {/* <ClassTimer></ClassTimer>
        <HookTimer></HookTimer> */}

        {/* <DocTitleOne></DocTitleOne>
        <DocTitleTwo></DocTitleTwo> */}

        {/* <CounterOne />
        <CounterTwo /><br />
        <UserForm/> */}
        <TodoApp/>
    </div>
  );
}

export default App;

