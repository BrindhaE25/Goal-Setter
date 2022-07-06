import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css'


const CourseGoalList = (props) => {
    return (
        <ul className='goal-list'>
            {props.goals.map(goalItem => (
        <CourseGoalItem key={goalItem.id} id={goalItem.id}>{goalItem.text}</CourseGoalItem>
            ))} 
        </ul>
    );
};

export default CourseGoalList;