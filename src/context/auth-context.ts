import { createContext, useContext } from "react";

// enum EHandlers {
//     INITIALIZE = 'INITIALIZE',
//     SIGN_IN = 'SIGN_IN',
//     SIGN_OUT = 'SIGN_OUT',
// }

// interface IState {
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     user: object | null;
// }

// const initialState: IState = {
//     isAuthenticated: false,
//     isLoading: false,
//     user: null
// }

// const handlers = {
//     [EHandlers.INITIALIZE]: (state, action) => {
//         const user = action.payload;
//         return {
//             ...state,
//             ...(
//                 user
//                     ? ({
//                         isAuthenticated: true,
//                         isLoading: false,
//                         user
//                     })
//                     : ({
//                         isLoading: false,
//                     })
//             )
//         }
//     },
//     [EHandlers.SIGN_IN]: (state, action) => {

//     },
//     [EHandlers.SIGN_OUT]: (state, action) => {

//     }
// }

// const reducer = (state: IState, action) => {

// }

// export const AuthContext = createContext({ undefined });

// export const AuthProvider = (props) => {

// }

// export const AuthConsumer = AuthContext.Consumer;

// export const useAuthContext = () => useContext(AuthContext)

export const useAuthContext = () => {}