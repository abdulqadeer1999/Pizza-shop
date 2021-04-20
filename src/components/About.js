
import Image from "../images/pizza2.jpg"
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About us</h3>
                        <h1>WELCOME TO MAESTRO PIZZA</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            minus ut mollitia error molestiae quia.
            </p>
                        <div className="about__btn">
                            <a href=" " className="btn btn-smart">
                                READ MORE</a>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src={Image} alt="pizza image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;