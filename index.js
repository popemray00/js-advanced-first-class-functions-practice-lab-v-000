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
  if (driver.revenue < revenue -1) {
    driver.sort()
  }
}
