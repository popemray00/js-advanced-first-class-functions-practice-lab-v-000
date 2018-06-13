const callback = function (el, i, arr) {
  console.log(el.name);
}

function logDriverNames(driver) {
  driver.forEach(callback)
}

const logDriversByHometown = function (driver, hometown) {
  driver.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (driver) {
  return driver.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
}

const driversByName = function (driver) {
  return driver.name.sort()
}
