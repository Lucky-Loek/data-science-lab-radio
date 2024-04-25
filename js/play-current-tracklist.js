window.addEventListener('load', () => {
	document.getElementById('play-current-tracklist').addEventListener('click', () => {
		fetch('http://localhost:6680/mopidy/rpc', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				method: "core.playback.play",
				id: 1
			})
		})
		.then(response => response.json())
		.then(data => console.log(data.result))
	});
});
