import chalk from 'chalk'

type LoggerFunction = (msg: string) => void

interface ILogger {
  bold: LoggerFunction
  error: LoggerFunction
  info: LoggerFunction
  success: LoggerFunction
  warn: LoggerFunction
}

/**
 * Creates a logger function with optional color formatting.
 *
 * @param {LoggerFunction} logFunction - The function to perform the logging.
 * @param {ChalkInstance | undefined} [colorFunction] - Optional chalk instance for color formatting.
 * @returns {LoggerFunction} - The created logger function.
 */
const createLogger =
  (logFunction: LoggerFunction, colorFunction?: typeof chalk): LoggerFunction =>
  (msg: string) => {
    // Format the message with color if a colorFunction is provided
    const formattedMsg = colorFunction ? colorFunction(msg) : msg
    logFunction(formattedMsg)
  }

// Logger object with error, info, and success functions
const logger: ILogger = {
  bold: createLogger(console.log, chalk.bold),
  error: createLogger(console.error, chalk.red),
  info: createLogger(console.log),
  success: createLogger(console.log, chalk.greenBright),
  warn: createLogger(console.log, chalk.yellow),
}

export default logger
