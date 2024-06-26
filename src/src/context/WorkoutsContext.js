import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsREducer = (states) => {
switch (action.type) {
    case 'SET_WORKOUTS':
        return {
            workouts: action.payload
        }
        case 'CREATE_WORKOUT' :
            return {
                workouts: [action.payload, ...state.workouts]
            }
            default:
                return state
}
}

export const WorkoutsContextProvider = () => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

  


    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}

export default WorkoutsContext