function superbowlWin(record) {

  const wFinder = record.find(record => record.result === "W")
  if(wFinder) {
      return wFinder.year
  }
  else if(!wFinder) {
      return undefined
  }
}