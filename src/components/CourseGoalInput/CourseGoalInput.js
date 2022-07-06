import './CourseGoalInput.css';
import {useState} from 'react';
import Button from '../UI/Button/Button'

const CourseGoalInput = (props) => {
    const [input,setInput] = useState('');

    const onChangeInputHandler = (event) => {
        setInput(event.target.value);
    }
    const addGoal = (event) => {
        const newGoal = {id: Math.random().toString(),text:input};
        props.addNewGoal(newGoal);
        event.preventDefault();
        setInput('');

    }
    return (
        <form  onSubmit={addGoal}>
            <div className="form-control">
            <label>Course Goal</label>
            <input type="text" onChange={onChangeInputHandler} value={input}/>
            </div>
            <Button type="submit"> Add Goal </Button>

        </form>

    );


};

export default CourseGoalInput;