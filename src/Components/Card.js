import '../Css/Card.css'

export default function Card({ ...props }) {
    return (
        <div className={props.className}>
            <div className="card" data-aos="fade-in">
                <div className="cardLayout">
                    <div className='cardDetails'>
                        <div>
                            <h2> {props.title} </h2 >
                            <h4>{props.detailsTitle}</h4>
                            <div> {props.details} </div>
                        </div>
                        <div>
                            <h4>{props.details2Title}</h4>
                            <div> {props.details2} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}