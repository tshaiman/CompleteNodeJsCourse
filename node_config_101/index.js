

const type = process.env.PROCESS_TYPE
console.log("process type is " , type)
if (type === 'web') {
    require('./web')
  } else if (type === 'twitter') {
    require('./twitter')
  }else {
    throw new Error(`
      ${type} is an unsupported process type. 
      Use one of: 'web', 'twitter-stream-worker', 'social-preprocessor-worker'!
    `)
  }