import classes from './SectionHead.module.css';

const SectionHead = (props) => {
    return (
        <div className={`${classes['section__head']} ${props.className}`}>
            <span>{props.icon}</span>
            <h2>{props.title}</h2>
        </div>
    )
};

export default SectionHead;