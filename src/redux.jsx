import { useContext, useEffect, useState, createContext } from "react";

export const AppContext = createContext();

export const store = {
  state: { user: { name: "丑八怪", age: 18 } },
  setState: (newState) => {
    store.state = newState;
    store.listeners.map((fn) => fn(store.state));
  },
  listeners: [],
  subscribe: (fn) => {
    store.listeners.push(fn);
    return () => {
      const index = store.listeners.indexOf(fn);
      store.listeners.splice(index, 1);
    };
  },
};

export const reducer = (state,{type,payload}) => {
    if(type === 'updateUser'){
        return {
            ...state,
            user:{
                ...state.user,
                ...payload
            }
        }
    }   
    return state
}


export const connent =(selector)=> (Component) => {
  return (props) => {
    const { state, setState, subscribe } = useContext(AppContext);
    const [, update] = useState({});
    const data = selector ? selector(state) : {state}
    useEffect(() => {
      subscribe(() => {
        update({});
      });
    }, []);
    const dispath = (action) => {
      setState(reducer(state, action));
    };
    return <Component dispath={dispath} {...data} {...props} />;
  };
};
