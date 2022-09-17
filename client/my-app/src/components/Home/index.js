import Navbar from '../Nav'
import './index.css'

const Home = () =>{
    return(
        <>
        <Navbar/>
        <div className="container">
        <div className="row">
            <div className="col-lg-6 p-5 mt-5">
                <h1 className="tagline">Work together, </h1>
                <h1 className="tagline mt-2">dream together.</h1>
                <button className="btn btn-dark mt-4 shadow">View employees</button>
            </div>
            <div className="col-lg-6 mt-3 ">
                <img className="b1" src="https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?w=1060&t=st=1663412333~exp=1663412933~hmac=2b768f99640dd49b5ff2a8b501ab38f89aef0a7b892d6fd90a9048f7b91ac81e" alt="employee teamwork image" />

            </div>

        </div>

    </div>

        </>
    )
}

export default Home