function StudentList({students}){
    return(
        <div style={styles.container}>
            <h2 style={styles.heading}>Student List</h2>

            {students.length === 0 ? (
                <p>No students found</p>
            ) : (
                <table style={styles.table}>
                <thead>
                    <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Age</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Course</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                    <tr key={student.id}>
                        <td style={styles.td}>{student.id}</td>
                        <td style={styles.td}>{student.name}</td>
                        <td style={styles.td}>{student.age}</td>
                        <td style={styles.td}>{student.email}</td>
                        <td style={styles.td}>{student.course}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e6f2ff",
    minHeight: "80vh"
  },
  heading: {
    marginBottom: "20px"
  },
  empty: {
    color: "gray",
    fontSize: "18px"
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    width: "80%",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  th: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd"
  },
  tr: {
    textAlign: "center"
  }
};
export default StudentList;