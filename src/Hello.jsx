import "./Hello.css";

export default  function Hello({Fname,Lname="Jaidee",age=25}) {
 
    return (<h1>{Fname}{Lname}</h1>);
    
}
