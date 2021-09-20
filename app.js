const $giphArea = $('#giphArea');
const $giphSearchInput = $('#giph-input');

function addGiph(res) {
	const numResults = res.data.length;
	if (numResults) {
		const randomGiph = Math.floor(Math.random() * numResults);
		const $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
		const $newGif = $('<img>', {
			src   : res.data[randomGiph].images.original.url,
			class : 'giph',
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