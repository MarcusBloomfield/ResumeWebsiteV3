import '../Css/Card.css'

export default function Card({ ...props }) {
    return (
        <div className={props.className}>
            <div className="card" data-aos="fade-in">
                <h2> {props.title} </h2 >
                <div className="cardDetails">
                    <div> {props.details} </div>
                    <Photo photoAddress={props.photoAddress} />
                </div>
            </div>
        </div>
    );
}

function Photo({ ...props }) {
    if (props.photoAddress != null) {
        return <img src={props.photoAddress} className="cardPhoto" />
    }
}