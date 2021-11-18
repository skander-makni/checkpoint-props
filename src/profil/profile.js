import {Button} from "react-bootstrap"

const Profile = props => {
    
  
    return (
        <div className="bnb" style ={{alignItems:"center",display:"flex",flexDirection:"column",marginTop:60 }}>
        <span>{props.fullName } </span>
       <span> {props.Bio}</span>
        <span>{props.profession} </span>
        <span><Button variant="success" onClick={() => props.handelname(props.fullName)}>Who am i ?</Button>{' '}</span>
       <span> {props.children}</span>

        </div>
    )

    };
   export default Profile; 
   
   
   Profile.defaultProps = 
    {
    fullName: "Makni skander",
    Bio: "hi everbody",
    profession: "etudiant",
   };