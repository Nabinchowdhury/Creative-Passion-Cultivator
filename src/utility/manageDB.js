
const addToDB = (name, value) => {
    let item = {}
    item[name] = value
    localStorage.setItem("key", JSON.stringify(item))


};
const getFromDB = () => {
    const breaktime = JSON.parse(localStorage.getItem("key"))

    return breaktime;
}
export {
    addToDB,
    getFromDB
}