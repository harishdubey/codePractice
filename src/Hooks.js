import React, { useState, useCallback, useMemo, useRef, useId, useImperativeHandle, forwardRef, useLayoutEffect, useEffect, useReducer } from 'react';

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

function UseLayoutHooks() {
    const divRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth);
        }
    }, []);

    return (
        <div>
            <div ref={divRef} style={{ width: '60%' }}>
                Resize me!
            </div>
            <p>Width: {width}px</p>
        </div>
    );
}

function useCustomHook() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return width
}

function useTimeOut(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    useEffect(() => {
        if (delay === null) return;
        const tick = () => savedCallback.current();
        const id = setTimeout(tick, delay);
        return () => clearTimeout(id)
    }, [delay])
}

function CustomHook() {
    const width = useCustomHook();
    useTimeOut(() => { console.log("Expected to console 2 mins") }, 2000)
    return <p>Window Width : {width}</p>
}

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case "increment": return { count: state.count + 1 }
        case "decrement": return { count: state.count - 1 }
        case "reset": return initialState;
        default:
            throw new Error(`unhandled action type ${action.type}`)
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<div>
        <h1>Counter : {state.count}</h1>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

    </div>)
}

const initialState2 = [];

function reducer2(state, action) {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), text: action.payload, done: false }];
        case "toggle":
            return state.map((todo) => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
        case "remove":
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
}

function ToDo() {
    const [todos, dispatch] = useReducer(reducer2, initialState2)
    const [text, setText] = useState("")

    const handleAdd = () => {
        dispatch({ type: "add", payload: text });
        setText("");
    }
    return (
        <div>
            <h2>To Do List</h2>

            <input type="text" value={text} placeholder='New Task' onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((item) => {
                    return (
                        <>
                            <li key={item.id}>
                                <span
                                    style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                                    onClick={() => dispatch({ type: "toggle", payload: item.id })}>
                                    {item.text}
                                </span>
                                <button onClick={() => dispatch({ type: "remove", payload: item.id })}>Remove</button>
                            </li>
                        </>
                    )
                })}
            </ul>
            <button></button>
        </div >
    )
}

function Hooks() {
    return (<>
        <UseLayoutHooks />
        <CallBack />
        <Memo />
        <UseRef />
        <UseId />
        <ImperativeHandle />
        <CustomHook />
        <UseReducer />
        <ToDo />
    </>
    )
}


export default Hooks;
