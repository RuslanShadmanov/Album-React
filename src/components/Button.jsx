export const Button = ({handleClick,id,btnName})=>{
    return <button onClick={()=>(id ? handleClick(id): handleClick() )}>{btnName}</button>
}