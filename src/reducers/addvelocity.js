function addvelocity(state, action) {
    switch(action.type) {
        case 'random' :
            return { v: {
                x: state.v.x + Math.random()*60 - 30,
                y: state.v.y + Math.random()*60 - 30
            }};
        case 'left' :
            return {
                v: {
                    x: state.v.x - 10,
                    y: state.v.y
                }
            };
        case 'right' :
            return {
                v: {
                    x: state.v.x + 10,
                    y: state.v.y
                }
            };
        case 'up' :
            return {
                v: {
                    x: state.v.x,
                    y: state.v.y - 10
                }
            };
        case 'down' :
            return {
                v: {
                    x: state.v.x,
                    y: state.v.y + 10
                }
            };
        default: 
            throw new Error()
    }
}
export default addvelocity;