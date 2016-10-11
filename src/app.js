function sleep(msec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
}

(async () => {

  await sleep(1000)

  console.log('aaa')

  await sleep(2000)

  console.log('bbb')

})()
