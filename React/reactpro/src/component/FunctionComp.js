 const FunctionComp= (props) => {
    return(<div>
     <h2>This is Function Component</h2>
     <p>This is para function using JSX</p>
     <p>I am <strong>{props.name}</strong> and I am <strong>{props.post}</strong></p>
     </div>)
}

export default FunctionComp;