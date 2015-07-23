var adapter = require('traktor-dpro-adapter-lib');


process.title = 'traktor-dpro-adapter';

process.on('SIGINT', function() {
  console.log('');
  console.log('Closing MIDI ports');

  adapter.stop();

  process.exit();
});

choosePorts().then(function (ports) {
  console.log('');
  console.log('Starting with MIDI ports ' + ports);

  adapter.setInputPort(ports[0]);
  adapter.setOutputPort(ports[1]);
  adapter.start();
});

function choosePorts() {
  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var inputPort = new Promise(function (resolve) {
    var ports = adapter.getInputPorts();

    console.log('');
    console.log("Input Ports");
    ports.forEach(function (port) {
      console.log(port.id + ") " + port.name);
    });

    rl.question("Choose the port to read from: ", function(port) {
      resolve(parseInt(port));
    });
  });

  var outputPort = inputPort.then(function () {
    var ports = adapter.getOutputPorts();

    console.log('');
    console.log("Output Ports");
    ports.forEach(function (port) {
      console.log(port.id + ") " + port.name);
    });

    var outputPort = new Promise(function (resolve) {
      rl.question("Choose the port to write to: ", function(port) {
        resolve(parseInt(port));
      });
    });

    return outputPort;
  });

  var chosenPorts = Promise.all([inputPort, outputPort]);

  chosenPorts.then(function () {
    rl.close();
  });

  return chosenPorts;
}
