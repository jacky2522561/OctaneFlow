import { useState } from 'react';
import SelectBar from './components/SelectBar';
import FlowShow from './components/FlowShow';
import './AppStyle.css';
const App = () => {
    const DEFAULTROLES = ['請選擇角色','Release Manager','Scrum Master','Product Owner','Developer','Stakeholders'];
    const [index,setIndex] = useState(0);
    const showFlow =(Index) =>{
        setIndex(Index);
    }
    return (
        <div className='wrapper'>
            <SelectBar getIndex = {showFlow} roles = {DEFAULTROLES}/>
            <FlowShow  index = {index} />
        </div>
    )
}

export default App;