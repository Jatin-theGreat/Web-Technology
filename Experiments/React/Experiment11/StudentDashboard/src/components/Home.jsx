function Home(){
    return(
        <>
            <div style={styles.container}>
                <div>
                    <h2>Welcome to Student Dashboard</h2>
                    <p>You can add new student and view student list.</p>
                </div>
            </div>
        </>
    )
};
const styles = {
    container : {
        height : "80vh",
        display : "flex",
        justifyContent : "center",
        padding : "200px",
        //alignItems : "center",
        textAlign : "center",
        color : "#1c64b1",
        backgroundColor: "#e6f2ff"
    },
    h2 : {
        color : "black"
    }
};
export default Home;
