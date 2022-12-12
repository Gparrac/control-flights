const fakeAirlines = () =>{
    let tempArr = []
    for (let i = 0; i < 20; i++) {
        tempArr.push({
            idairline:i,
            nameairline: `aerolinea ${i}`
        });
    }
    return tempArr;
}
export default fakeAirlines;