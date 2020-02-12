import React, {useEffect} from "react";

const styles = {
  width: '100%'
};
export default function Audio({audio}) {
let ref = React.createRef();


  useEffect(() => {
    ref.current.load();
  });

  return (

      <audio id="audio1"
             style={styles}
             controls
             ref={ref}

      >
        <source src={audio}/>
      </audio>
  )
}