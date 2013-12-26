class GitHubController
	constructor: (@$log, @gitHubService) ->
		@search = (searchTerm) =>
			@gitHubService.get(searchTerm).then (results) =>
				@repos = results