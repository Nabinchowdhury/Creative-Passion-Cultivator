
const addToDB = (time) => {
    let item = {}
    item.breaktime = time
    localStorage.setItem("key", JSON.stringify(item))


};
const getFromDB = () => {
    let breaktime = JSON.parse(localStorage.getItem("key"))

    return breaktime;
}
export {
    addToDB,
    getFromDB
}