var React 						= require('react');
var AppActions				= require('../actions/AppActions');
var AppStore					= require('../stores/AppStore');

var SearchForm = React.createClass({
	render: function() {
		return (
			<div className="search-form">
				<h4 className="text-center">cine-srch.</h4>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="search" />
					</div>
					<button className="btn btn-success btn-block">enter</button>
				</form>
			</div>
		)
	}, 

	onSubmit(e) {
		e.preventDefault();

		var movie = {
			title: this.refs.title.value.trim()
		}

		AppActions.searchMovies(movie);
	}
});

module.exports = SearchForm;