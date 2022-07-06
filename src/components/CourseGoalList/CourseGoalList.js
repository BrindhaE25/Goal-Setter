import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css'


const CourseGoalList = (props) => {
    const onDeleteGoalHandler = (id) => {
        props.onDeleteGoal(id);
    }
    if(props.goals.length === 0) {
        return <p style={{ textAlign: 'center' , color:'red'}}>No Goals found</p>
    }
    return (
        <ul className='goal-list'>
            {props.goals.map(goalItem => (
        <CourseGoalItem key={goalItem.id} id={goalItem.id} onDelete={onDeleteGoalHandler}>{goalItem.text}</CourseGoalItem>
            ))} 
        </ul>
    );
};

export default CourseGoalList;