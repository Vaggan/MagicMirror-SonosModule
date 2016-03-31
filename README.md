# MagicMirror-Sonos-Module

## Introduction

This is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror) created by [MichMich´s](https://github.com/MichMich) to display the current playing songs of your Sonos system.

## Usage

_Requirement_

##### [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api) by [jishi](https://github.com/jishi)
This API is required to run to be able to communicate with the sonos system.
Wihtout it we can not get the zones and we can not send any commands.

### Installation

To use this module, just create a new folder in the __modules__ folder of your MagicMirror, name it 'sonos' and copy the content of the repository into this folder. You also need to add some [config entries](#configuration) to your config.js file. After that the content will be added to your mirror.

### Configuration

To run the module properly, you need to add the following data to your config.js file.

```
{
	module: 'sonos',
	position: 'top_right', // you may choose any location
	config: {}
}
```

You can also add the following options in the config section:

- Use `updateInterval` to set the time in milliseconde between the update cycles. (default: 30 seconds)
- Use `showStoppedRoom` to hide a room if it plays no musik. (default: true)
- Use `showAlbumArt` to hide the album art. (default: true)
- Use `showRoomName` to hide the room name. (default: true)
- Use `apiBase` to set the service url. (default: //localhost)
- Use `apiPort` to set the service port. (default: 5005)

### Help

There is a discussion [here](https://github.com/MichMich/MagicMirror/issues/94) that might help you get up and running.
If you have further problems, don´t hesitat to ask.

### Known Issues

The module may not be able to access the data of the sonos API due to a Cross-Origin Resource Sharing (CORS) issue. This could be solved by adding the following lines to the `sonos-http-api.js` just before `res.write(new Buffer(jsonResponse));` in the sonos api. Remember to restart the service after the change.

```
  res.setHeader("Access-Control-Allow-Origin", "http://localhost");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
```
