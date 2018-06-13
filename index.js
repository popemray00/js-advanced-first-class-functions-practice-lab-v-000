// Code your solution in this file
const callback = function (name, driver) {
  console.log(driver.name)
}

const logDriverNames = function (driver, callback) {
  for (const name of driver) {
    callback(name, driver)
  }
}
