# traktor-dpro-adapter-cli

NodeJS based Command Line Tool to synchronize D-Pro's Tempo with Traktor's Tempo.

Traktor sends Tempo Information as MIDI Clock Messages but D-Pro can not handle MIDI Clock Messages. D-Pro can be controlled via MIDI and has a remote control option to set the tempo via MIDI.

So this tool translates the MIDI Clock Messages to a BPM value and sends this BPM (60 to 187) as MIDI Control Change Message to D-Pro.


## Installation

The command line tool is for advanced users who know how to install all these programs. If you are looking for a program easier to use, take a look at [traktor-dpro-adapter-app](https://github.com/pburgmer/traktor-dpro-adapter-app).

* You need NodeJS and Python 2 installed
* On Windows you also need *Microsoft Visual C++*, on MacOS *XCode*
* Run ```npm install -g traktor-dpro-adapter-cli``` in a terminal window


## Setup
* Create a virtual MIDI Port on your host
* Start Traktor and D-Pro
* Start the cli via ```traktor-dpro-adapter```in a terminal window
* Open D-Pro Preferences, go to the MIDI tab and enable the virtual MIDI port
* Go to the Remote Control tab in D-Pro Preferences and add a new mapping for *Show Control: SET TEMPO (60-187 BPM)*
* To learn the Mapping choose *Traktor Virtual Output* and the virtual MIDI port in the traktor-dpro-adapter terminal window to answer the questions about inut and output port