export const Incrementer = (step) => {
    return {type:"Incrementer",payload:step}
}
export const Decrementer = () => {
    return {type:"Decrementer"}
}
export const Reset = () => {
    return {type:"Reset"}
}