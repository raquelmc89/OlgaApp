import uuid from 'uuid';
//actions


//ADD NAME

export const addName =(id, updates) =>({
    type: 'ADD_USER',
    id,
    updates
});

//reducers

const emailReducerDefaultState = [];
export default (state= emailReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_USER':
        return state,map((user)=>{
            if (user.id ===action.id){
                return {
                    ...user,
                    ...action.updates
                };
            }else{
                return user;
            };
            
        });
        default:
            return state
    }
}
  