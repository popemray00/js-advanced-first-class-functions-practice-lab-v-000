// Code your solution in this file
const callback = function (name, driver) {
  console.log(driver.name)
}

const logDriverNames = function (driver, cb) {
  for (const name of driver) {
    cb(name, driver)
  }
}
