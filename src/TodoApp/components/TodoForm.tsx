import { useState } from "react";
import { useTodo } from "../../Context/todoContext";

function TodoForm() {
    const {addTodo} = useTodo()
    const [val,setVal] = useState("")
    const add = (e:any) => {
        e.preventDefault();
        if (!val) return
        addTodo({todo:val,completed:false})
        setVal("")
    }
    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

