function delay(msec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
}

(async () => {

  await delay(1000)

  console.log('aaa')

  await delay(2000)

  console.log('bbb')

})()
