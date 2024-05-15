import chalk from 'chalk'
import {Presets, SingleBar} from 'cli-progress'

type LoggerFunction = (msg: string) => void

interface ILogger {
  bold: LoggerFunction
  error: LoggerFunction
  info: LoggerFunction
  progressBar: {
    create: (total: number) => SingleBar
  }
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

/**
 * Function to create a progress bar with a given total value
 * @param total - The total value that the progress bar should represent.
 * @param startValue - The initial value of the progress bar. Default is 0.
 * @returns {SingleBar} - Returns an instance of SingleBar representing the progress bar.
 */
const createProgressBar = (total: number, startValue: number = 0): SingleBar => {
  const bar = new SingleBar(
    {
      format: ' {bar} | {filename} | {value}/{total}',
      hideCursor: true,
    },
    Presets.shades_classic,
  )

  bar.start(total, startValue)

  return bar
}

// Logger object with error, info, and success functions
const logger: ILogger = {
  bold: createLogger(console.log, chalk.bold),
  error: createLogger(console.error, chalk.red),
  info: createLogger(console.log),
  progressBar: {
    create: createProgressBar,
  },
  success: createLogger(console.log, chalk.greenBright),
  warn: createLogger(console.log, chalk.yellow),
}

export default logger
