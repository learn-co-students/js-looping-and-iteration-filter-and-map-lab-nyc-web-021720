function driversWithRevenueOver(arr, revenue){
    return arr.filter(x => x.revenue >= revenue)
}

function driverNamesWithRevenueOver(arr, revenue){
    return driversWithRevenueOver(arr, revenue).map(x => x.name)
}

function exactMatch(drivers, matcher) {
    return drivers.filter(x => {
      for (const key in matcher) {
        return x[key] === matcher[key];
      }
    });
  }

function exactMatchToList(drivers, matcher){
    return exactMatch(drivers, matcher).map(x=> x.name)
}
  