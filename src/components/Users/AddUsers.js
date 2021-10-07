import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from '../Users/AddUsers.module.css'

function AddUsers(props) {
const [enteredUser, setUser] = useState('')
const [enteredAge, setAge] = useState('')
const [error, setError] = useState('');

const onaddHandler = (event) => {
    setUser(event.target.value)

}
const onageHandler = (event) => {
    setAge(event.target.value)
}

const onConfirmHandler = () => {
    setError('')
}


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Error Occured",
                message: "Please enter valid age or username"
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Error Occured",
                message: "Please enter valid age"
            })
            return;
        }
        props.onAddUser(enteredUser, enteredAge)
        
       
        setAge('');
        setUser('');

    }

    return (
        <div>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler}></ErrorModal> }
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUser} type="text" onChange={onaddHandler}></input>
                <label htmlFor="age">Age(Year)</label>
                <input value={enteredAge} type="number" onChange={onageHandler}></input>
                <Button type="submit">Add User</Button>
            </form>

        </Card>
        </div>
    );
}
export default AddUsers;