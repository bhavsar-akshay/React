import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Great from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import Classclick from './Components/Classclick';
import EventBinding from './Components/EventBinding';
import ChildComponent from './Components/ParentComponent';
import UserGreating from './Components/UserGreating';
import LoginComponent from './Components/LoginComponent';
import NameList from './Components/NameList';
import PersonList from './Components/PersonList';
import ToDoList from './Components/ToDoList';
import StyleSheet from './Components/StyleSheet';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import PortalDemo from './Components/PortalDemo';
import HeroComponent from './Components/HeroComponent';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ComponentA from './Components/ComponentA';
import { UserProvider } from './Components/UserContext';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
       <Great name="abc" id="111">
        <span>Hello Text</span>
      </Great>
      <Great name="xyz" id="222" />
      <Great name="123" id="333" />
      <Welcome  name="abc" id="111"></Welcome>

      <Message message="without state"> </Message>
      <Counter />
      <br/>
      <FunctionClick />
      <br />
      <Classclick />
      <br />
      <EventBinding />
      <ChildComponent />
      <UserGreating />
      <LoginComponent />

      <NameList />
      <PersonList />
      <ToDoList />
      <StyleSheet isStyle={true} />
      <Form />
      <LifeCycleA />
      <FragmentDemo />
      <PortalDemo></PortalDemo>
      <ErrorBoundary>
        <HeroComponent heroName="Akshay"></HeroComponent>
      </ErrorBoundary>

      <ErrorBoundary>
        <HeroComponent heroName="Bhavsar"></HeroComponent>
      </ErrorBoundary>

      <ErrorBoundary>
        <HeroComponent heroName="jocker"></HeroComponent>
      </ErrorBoundary> */}

      <ClickCounter name='akshay'></ClickCounter>
      <HoverCounter></HoverCounter>
      <UserProvider value="React">
        <ComponentA></ComponentA>
      </UserProvider>
    </div>
  );
}
}

export default App;
