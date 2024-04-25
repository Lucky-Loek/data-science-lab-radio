window.addEventListener('load', () => {
	document.getElementById('kink').addEventListener('click', () => {
		fetch('http://localhost:6680/mopidy/rpc', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				method: "core.tracklist.add",
				params: {
					"uris": ["tunein:station:s210430"]
				},
				id: 1
			})
		})
		.then(response => response.json())
		.then(data => console.log(data.result))
		.catch(error => console.log(error))
	});
});
