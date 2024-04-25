window.addEventListener('load', () => {
	fetch('http://localhost:6680/mopidy/rpc', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			jsonrpc: "2.0",
			method: "core.tracklist.get_tracks",
			id: 1
		})
	})
	.then(response => response.json())
	.then(data => {
		data.result.forEach(track => {
			console.log(track);
			let artist = 'None';
			if (track.artists !== undefined) {
				if (track.artists.length === 1) {
					artist = track.artists[0].name;
				} else {
					artist = track.artists.reduce((carry, current) => {
					return carry + `${current.name} &`;
				}, '');
				}
			}
			const name = track.name;
			const duration = millisecondsToHumanReadable(track.length);
			
			
			const tr = document.createElement('tr');
			tr.innerHTML = `
			<tr>
				<th>${artist}</th>
				<th>${name}</th>
				<th>${duration}</th>
			`;
			document.getElementById('tracklist').appendChild(tr);
		});
	})
	.catch(error => console.log(error))
});

const millisecondsToHumanReadable = (milliseconds) => {
	const date = new Date(milliseconds);
	return `${date.getUTCMinutes()} min ${date.getUTCSeconds()} sec`;
}
