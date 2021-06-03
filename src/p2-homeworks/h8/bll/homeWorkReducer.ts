import {UserType} from "../HW8";

type ActionType = {type:'sort', payload: 'up'| 'down'} | {type:'check', payload: number}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const stateN = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? stateN : stateN.reverse()
        }
        case 'check': {
             return state.filter(a => a.age >= action.payload )
        }
        default: return state
    }
}