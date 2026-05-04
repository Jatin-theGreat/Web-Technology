function StudentInfo(props){
    const name = "Siddhi";
    const email = "siddhi@gmail.com"

    return(
        <>
            <h3>Name : {props.fName}</h3>
            <h3>Age : {props.age}</h3>
            <h3>course : {props.course}</h3>
        </>
    )
}
export default StudentInfo;