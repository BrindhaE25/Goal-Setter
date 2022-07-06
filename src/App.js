import './App.css';
import {useState} from 'react';
import CourseGoalInput from './components/CourseGoalInput/CourseGoalInput';
import CourseGoalList from './components/CourseGoalList/CourseGoalList'

const DUMMY_GOALS = [
  {id:'g1',text:'Do all exercises!'},
  {id:'g2', text:'Finish the course!'}
];
function App() {
  const [goal,setGoal] = useState(DUMMY_GOALS);

  const onAddNewGoalHandler = (newGoal) => {
    setGoal(prevGoal => {
      const updatedGoal = [...prevGoal];
      updatedGoal.unshift(newGoal);
      return updatedGoal;
    });
  }

  const deleteGoalHandler = (goalId) => {
    setGoal(prevGoal => {
      const updatedGoal = prevGoal.filter(goal => goal.id !== goalId)
      return updatedGoal;
    })
    

  }

  return (
    <section id='goals'>
      <CourseGoalInput addNewGoal={onAddNewGoalHandler}/>
      <CourseGoalList goals = {goal} onDeleteGoal={deleteGoalHandler}/>
    </section>
  );
}

export default App;
