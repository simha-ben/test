function convertActionTypeToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

export default function createReducer(state, action, handlers) {
    // debugger
    const key = convertActionTypeToName(action.type);
    // key=setFirstName
    const handler = handlers[key];
    if (handler) {
        handler(state, action);
    }
}