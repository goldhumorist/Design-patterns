const logger = function (log, err) {
  return {
    log,
    err,
  };
};

function loggerDecorator(func) {
  return function (...args) {
    console.log(func.call(this, ...args));

    console.log("message logged at:", new Date().toLocaleString()); // additional info
  };
}

const decoratedLogger = loggerDecorator(logger);
decoratedLogger("This log from logger");
