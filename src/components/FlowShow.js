import RM from './pic/RM.jpg';
import SM from './pic/SM.jpg';
import PO from './pic/PO.jpg';
import DEV from './pic/DEV.jpg';
import SH from './pic/SH.jpg';
import Default from './pic/0.jpg';
import './FlowShowStyle.css';
// 'Release Manager','Scrum Master','Product Owner','Developer','Stakeholders'
const jpgMap2 = [Default,RM,SM,PO,DEV,SH];

const FlowShow = ({index}) =>{

    return(
        <div className='FS'>
            <img src={jpgMap2[index]} alt="flow"/>
        </div>
    )

}

export default FlowShow;