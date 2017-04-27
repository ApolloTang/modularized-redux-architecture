const DEBUG = (process && process.env && process.env.debug === true)
const PROD = (process && process.env && process.env.prod === true)

export default {
    DEBUG,
    PROD,
    shouldPersistStoreState: false
}
