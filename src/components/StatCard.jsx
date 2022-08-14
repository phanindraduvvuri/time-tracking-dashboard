import ellipsis from '../images/icon-ellipsis.svg';
import workLogo from '../images/icon-work.svg';

function StatCard(props) {
    console.log(props.stats)

    return (
        <div className="card">
            <div className="card__image">
                <img src={workLogo} alt="" />
            </div>
            <div className="card__content">
                <header>
                    <p className="card__title">Work</p>
                    <img src={ellipsis} alt="" />
                </header>
                <div className="card__stats">
                    <main>32hrs</main>
                    <footer>Last Week - 36hrs</footer>
                </div>
            </div>
        </div>
    )
}

export default StatCard;
