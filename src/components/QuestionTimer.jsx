import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  function handleRemainingTime() {
    setRemainingTime(prev => prev - 10)
  }
 
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer)
    }
  },[onTimeout, timeout]);
  
  useEffect(() => {
    const interval = setInterval(handleRemainingTime, 10);
  
    return () => {
      clearInterval(interval);
    }
  }
  ,[]);

  return <progress className={mode} id="question-time" value={remainingTime} max={timeout}></progress>
}