# Data Science Lab radio

During work, it can be quiet in the lab. Since we had a leftover amplifier
and some decent speakers, we thought to create a jukebox-like music player.
It should work with internet radio stations, but also Spotify songs and
playlists. This repository contains the frontend as an HTML + JavaScript
application to control Modipy hosted on a Raspberry Pi, which is connected
to the amplifier and speakers.

We will always make sure that the `main` branch is stable. But as this
jukebox is in use every day, it will be updated regularly. At some point
it will pivot to use WebSockets and the GUI will probably change quite
often.

## Installation

First make sure to have [Mopidy](https://mopidy.com) installed, together
with its [TuneIn](https://mopidy.com/ext/tunein/) (radio) and 
[Spotify](https://mopidy.com/ext/spotify/) (Spotify, obviously) extensions.

Then clone this repository and run the HTML file from a browser. Easy does
it!

> Note: at some point we'll probably move to Mopidy's built-in server to
be able to use ES6 Modules, and by extension Mopidy's built-in WebSockets 
and event system.

## Configuration

We assume default settings here, so Mopidy should run on `localhost:6680`.
Our Raspberry Pi's hostname and test sounds are blatantly hardcode in 
`js/add-test-sound.js`. Please change that file to point to a test file 
in your own setup.

Other than that, setup your Mopidy configuration as is required per their
documentation, i.e. Spotify credentials.

## Software used

- [Mopidy](https://mopidy.com/)
- [Pico CSS](https://picocss.com)
- Raspbian

