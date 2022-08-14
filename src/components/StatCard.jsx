import ellipsis from '../images/icon-ellipsis.svg';

import iconExercise from '../images/icon-exercise.svg';
import iconPlay from '../images/icon-play.svg';
import iconSelfCare from '../images/icon-self-care.svg';
import iconSocial from '../images/icon-social.svg';
import iconStudy from '../images/icon-study.svg';
import iconWork from '../images/icon-work.svg';

const colors = {
    'Work': "hsl(15, 100%, 70%)",
    'Play': "hsl(195, 74%, 62%)",
    'Study': "hsl(348, 100%, 68%)",
    'Exercise': "hsl(145, 58%, 55%)",
    'Social': "hsl(264, 64%, 52%)",
    'Self Care': "hsl(43, 84%, 65%)",
}

const logos = {
    'Work': iconWork,
    'Play': iconPlay,
    'Study': iconStudy,
    'Exercise': iconExercise,
    'Social': iconSocial,
    'Self Care': iconSelfCare,
}

function StatCard(props) {

    const { title, currentTime, prevTime, timeFrame } = props;

    return (
        <div className="card" style={{ backgroundColor: colors[title] }}>
            <div className="card__image">
                <img src={logos[title]} alt="" />
            </div>
            <div className="card__content">
                <header>
                    <p className="card__title">{title}</p>
                    <img src={ellipsis} alt="" />
                </header>
                <div className="card__stats">
                    <main>{currentTime}hrs</main>
                    <footer>{timeFrame} - {prevTime}hrs</footer>
                </div>
            </div>
        </div>
    )
}

export default StatCard;
