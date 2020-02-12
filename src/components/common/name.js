import React from "react";

const styles = {
    fontSize: '25px'
};

export default function Name({name}) {
return (
    <div style={styles}>{name}</div>
)
}