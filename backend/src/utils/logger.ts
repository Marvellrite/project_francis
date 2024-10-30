import logger from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const prettyStream = pretty({
    colorize: true
})

const log = logger( {
    base:{
        pid: false,
        // timeStamp: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
},
    prettyStream
)


export default log;