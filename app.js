const $giphArea = $('#giphArea');
const $giphSearchInput = $('#giph-input');

function addGiph(res) {
	const numResults = res.data.length;
	if (numResults) {
		const randomGiphIdx = Math.floor(Math.random() * numResults);
		const $newCol = $('<div>');
		const $newGif = $('<img>', {
			src : res.data[randomGiphIdx].images.original.url,
		});
		$newCol.append($newGif);
		$giphArea.append($newCol);
	}
}

$('form').on('submit', async function(e) {
	e.preventDefault();

	const giphSearch = $giphSearchInput.val();
	$giphSearchInput.val('');

	const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params : { q: giphSearch, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' },
	});
	addGiph(res.data);
});

$('#remove-btn').on('click', () => {
	$giphArea.empty();
});
