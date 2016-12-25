# MagicMirror-SonosModule

## Introduction

This is a sonos-module for the [MagicMirror](https://github.com/MichMich/MagicMirror) created by [MichMich´s](https://github.com/MichMich).

>I have taken the version [CFenner] (https://github.com/CFenner/MagicMirror-Sonos-Module) worked on and replaced my old one.

> ## The rest of this readme is not relevant.

## Configuration

"Modify ```config.js``` to change the behavior of the module."

* __apiBase__			- Set to ulr to your [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api)
* __interval__			- Set the time between each update (10000 = 10 sec). 
* __showPausedZone__	- Set to ```true``` if you want to show zones and groups even if nothing is playing.
  

## Requirement

##### [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api) by [jishi](https://github.com/jishi)
This API is required to run to be able to communicate with the sonos system.
Wihtout it we can not get the zones and we can not send any commands.

## Help

There is a discussion [here](https://github.com/MichMich/MagicMirror/issues/94) that might help you get up and running.
If you have further problems, don´t hesitat to ask.
