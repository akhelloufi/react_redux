import { connect, useDispatch   , useSelector } from 'react-redux';
import './App.css';
import {Incrementer,Decrementer,Reset} from './action'
/*methode avec hook plus utilise */ 
function App2(props) {
 const num=useSelector(data=>data.num)
 const dispatch=useDispatch()
  return (
    <div className="App">
      <div>{num}</div>
      <div>
        <button onClick={() => dispatch(Incrementer(5))}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
}
/*const mapStateToProps = state => {
    return {
        num: state.num
    };
};*/
/*const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      inc: () => dispatch(Incrementer()),
      dec: () => dispatch(Decrementer()),
      reset: () => dispatch(Reset()),
    }
  }*/
//export default connect(null,mapDispatchToProps)(App2);
export default  App2 ;