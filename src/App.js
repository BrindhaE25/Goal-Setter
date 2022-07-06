import './App.css';
import CourseGoalList from './components/CourseGoalList/CourseGoalList'

function App() {
  const dummy_goals = [
    {id:'g1',text:'Do all exercises!'},
    {id:'g2', text:'Finish the course!'}
  ];
  return (
    <section id='goals'>
      <CourseGoalList goals = {dummy_goals}/>
    </section>
  );
}

export default App;
