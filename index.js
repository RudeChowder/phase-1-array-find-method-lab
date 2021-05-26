function superbowlWin(record){
    // function checkForWin(element){
    //     return element.result === "W"
    // }
    
    // const winningYear = record.find(checkForWin)
    // if (typeof winningYear === 'object'){
    //     return winningYear.year
    // } else {
    //     return undefined

    const winningRecord = record.find( element => element.result === 'W')
    if (winningRecord) {
        return winningRecord.year
    } else {
        return undefined
    }
}
