import { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from '../Users/AddUsers.module.css'

function AddUsers(props) {
const enteredUser = useRef('')
const enteredAge = useRef('')
const [error, setError] = useState('');



const onConfirmHandler = () => {
    setError('')
}


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUser.current.value.trim().length === 0 || enteredAge.current.value.trim().length === 0) {
            setError({
                title: "Error Occured",
                message: "Please enter valid age or username"
            })
            return;
        }
        if(+enteredAge.current.value < 1) {
            setError({
                title: "Error Occured",
                message: "Please enter valid age"
            })
            return;
        }
        props.onAddUser(enteredUser.current.value, enteredAge.current.value)
        
       
       enteredAge.current.value = '';
       enteredUser.current.value= '';

    }

    return (
        <Wrapper>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler}></ErrorModal> }
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input  type="text"  ref={enteredUser}></input>
                <label htmlFor="age">Age(Year)</label>
                <input  type="number"  ref={enteredAge}></input>
                <Button type="submit">Add User</Button>
            </form>

        </Card>
        </Wrapper>
    );
}
export default AddUsers;