const callback = function (el, i, arr) {
  console.log(el.name);
}

function logDriverNames(driver) {
  driver.forEach(callback)
}

function logDriversByHometown(driver, hometown) {
  driver.forEach(callback)
}
