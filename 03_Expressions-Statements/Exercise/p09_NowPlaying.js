function nowPlaying([trackName, artistName, duration]) {
    let song = {artist: artistName, songName:trackName, time:duration};
    console.log(`Now Playing: ${song.artist} - ${song.songName} [${song.time}]`)
}

nowPlaying(['Number One', 'Nelly', '4:09']);
