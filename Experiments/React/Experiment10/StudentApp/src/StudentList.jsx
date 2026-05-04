function StudentList({students}){
    return(
        <>
            <h2 style={{paddingLeft : "60px"}}>Student List</h2>

            <ul style={{color : "black"}}>
                {students.map((student) => (
                    <ul key={student.id} >
                        <p >Id : {student.id}</p>
                        <p>Name : {student.name}</p>
                        <p>Age : {student.age}</p>
                        <p>Email : {student.email}</p>
                        <p>Course : {student.course}</p>
                        <hr/>
                    </ul>
                    
                ))}
            </ul>
        </>
    )
};
export default StudentList;