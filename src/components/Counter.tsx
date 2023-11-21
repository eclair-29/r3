import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { decreaseCount, increaseCountAsync } from '../state/counter/slice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  const handleCountIncrease = () => dispatch(increaseCountAsync());
  const handleCountDecrease = () => dispatch(decreaseCount());

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCountIncrease}>Increase</button>
      <button onClick={handleCountDecrease}>Decrease</button>
    </>
  );
}

export default Counter;
