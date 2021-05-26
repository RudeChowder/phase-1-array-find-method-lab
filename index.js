function superbowlWin(record){
    const winningRecord = record.find( element => element.result === 'W')
    if (winningRecord) {
        return winningRecord.year
    } else {
        return undefined
    }
}
