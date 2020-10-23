const initialState = {
    mainPageGreeting: "Hello MainPage",
    secondPageGreeting: {
        title: "hello Second Page",
        body: "I think this is ridiculous"
    }
}

const rootReducer = (state = initialState) => {
    return state
}

export default rootReducer