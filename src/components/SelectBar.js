import './SelectBarStyle.css';
const SelectBar = ({roles,getIndex}) =>{
    
    const SelectOptions = roles.map((role,id)=>{
        if(id===0) return <option key={id} disabled value={role}>{role}</option>;
        else return <option key={id}>{role}</option>;
    });

    const handlechange = (e) =>{
        getIndex(e.target.selectedIndex);
    }
    
    return(
        <div className="SB">
            <select className='SB_SL' onChange={handlechange} defaultValue='請選擇角色'>
                {SelectOptions}
            </select>
        </div>
    )

}

export default SelectBar;