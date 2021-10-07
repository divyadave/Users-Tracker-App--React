import classes from '../UI/Button.module.css';

function Button (props) {
    return (
        <button type={props.type || 'button'} className={classes.button} onClick={props.onClick} >{props.children}</button>
    );

}
export default Button;