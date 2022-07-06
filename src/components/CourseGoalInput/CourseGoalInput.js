import './CourseGoalInput.css';
import {useState} from 'react';
import Button from '../UI/Button/Button'

const CourseGoalInput = () => {
    const [input,setInput] = useState('');

    const onChangeInputHandler = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    }
    return (
        <form >
            <div className="form-control">
            <label>Course Goal</label>
            <input type="text" onChange={onChangeInputHandler} value={input}/>
            </div>
            <Button type="submit"> Add Goal </Button>

        </form>

    );


};

export default CourseGoalInput;