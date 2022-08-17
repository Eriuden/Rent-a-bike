import { DELETE_BIKE, GET_BIKE, UPDATE_BIKE } from "../actions/bike.action";
//On va procéder autrement pour le create, comme les autres fois

const initialState = {}

export default function bikeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BIKE:
            return action.payload
        
        
        case UPDATE_BIKE:
            return state.map((bike) => {
                if (bike.id === action.payload.bikeId) {
                    return {
                        ...bike,
                        name: action.payload.name,
                        rentPrice: action.payload.rentPrice,
                        kilometers: action.payload.kilometers
                    }
                } else return bike
            })
        case DELETE_BIKE:
            return state.filter((bike) => bike._id !== action.payload.bikeId)
        

        default:
            return state
    }
}