import React, { createContext, useReducer } from "react";


const initialState = {
    openMenu: false,
}

const actions = {
    SET_MENU: "SET_MENU",
}

const LayoutContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_MENU:
        return { ...state, openMenu: action.value }
        default:
        return state
    }
}
  

const LayoutContextProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const value = {
        openMenu: false,
        setOpenMenu: value => {
            dispatch({ type: actions.SET_MENU, value })
        },
    }

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    )
}

export { LayoutContextProvider as default, LayoutContext }
