import { useWorkoutsContext } from "../context/WorkoutContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  const {dispatch}= useWorkoutsContext();
const{title,load,reps,createdAt}=workout;

const handleDelete = async()=>{
const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{method:'DELETE'});
const json= await response.json();

if (response.ok){
  dispatch({type:"DELETE_WORKOUT",payload:json})
 
}
}
    return (
      <div className="workout-details">
        <h4>{title}</h4>
        <p><strong>Load (kg): </strong>{load}</p>
        <p><strong>Number of reps: </strong>{reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
      </div>
    )
  }
  
  export default WorkoutDetails