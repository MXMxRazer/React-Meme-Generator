import '../index.css'; 

export default function First(props) {

 const styles = {backgroundColor: props.on ? "red" : "transparent"} 
    console.log(props.key)
  return (
        <div 
        className='boxName'
        style={styles}
        onClick={()=> {props.handler(props.id)}}
        >
            
        </div>
    )
}