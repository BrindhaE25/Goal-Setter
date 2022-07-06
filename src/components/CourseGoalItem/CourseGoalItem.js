import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
    const deleteGoal = () => {
        props.onDelete(props.id);
    }
    return (
        <li className="goal-item" onClick={deleteGoal}>
           {props.children}
        </li>
    );
};

export default CourseGoalItem;