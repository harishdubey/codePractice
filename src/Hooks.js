import React, { useState, useCallback, useMemo, useRef, useId, useImperativeHandle, forwardRef } from 'react';

const Button = React.memo(({ onClick }) => {
    console.log('Button rendered');
    return <button onClick={onClick}>Click Me</button>;
});

function CallBack() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Clicked');
    }, []); // Stable reference

    return (
        <>
            <h1>{count}</h1>
            <Button onClick={handleClick} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

function Memo() {
    const [count, setCount] = useState(0);

    const expensiveComputation = (num) => {
        console.log('Computing...');
        return num * 2;
    };

    const computed = useMemo(() => expensiveComputation(count), [count]);

    return (
        <>
            <h1>Computed: {computed}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

function UseRef() {
    const InputRef = useRef(null)
    const InputRef2 = useRef(null)
    const handleClick = () => InputRef.current.focus();
    const handleClick2 = () => InputRef2.current.focus();
    return (
        <div>
            <input ref={InputRef} type="text" />
            <button onClick={handleClick}>Ref1</button>
            <input type='number' ref={InputRef2} />
            <button onClick={handleClick2}>Ref2</button>
        </div>
    )
}

function UseId() {
    const id = useId();
    const id2 = useId();

    return (
        <>
            <label htmlFor={id}>Label</label>
            <input id={id} type='text' />
            <label htmlFor={id2}>Label2</label>
            <input id={id2} type='text' />
        </>
    )

}

const InputBox = forwardRef((props, ref) => {
    const Inputref = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => Inputref.current.focus()
    }))
    return <input ref={Inputref} type="text" />
})

function ImperativeHandle() {
    const Inputref = useRef();

    return (
        <div>
            <InputBox ref={Inputref} />
            <button onClick={() => Inputref.current.focus()}>Parent Click</button>
        </div>
    )
}

function Hooks() {
    return (<>
        <CallBack />
        <Memo />
        <UseRef />
        <UseId />
        <ImperativeHandle />
    </>
    )
}


export default Hooks;
