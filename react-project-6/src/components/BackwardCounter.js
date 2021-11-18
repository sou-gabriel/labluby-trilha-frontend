import Card from './Card';
import useCounter from '../hooks/useCounter';

const BackwardCounter = () => {
  const counter = useCounter(false)
  console.log(counter)

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
