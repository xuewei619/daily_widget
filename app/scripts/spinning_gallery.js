var mian = require('main.js');

var Wrapper = React.createClass({displayName: "Wrapper",
	render: function(){
		const style = {
			perspective: '400px',
			width: '100%',
			height: '200px',
			backgroundColor: '#444444',
			opacity: '0.2',
			position: 'relative',
			transformStyle: 'preserve-3d'
		};
		
		const itemStyle = {
			width: '100px',
			height: '100px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginLeft: '-50px',
			marginTop: '-50px',
			transition: 'rotate 1s',
			transition: 'transform 1s',
			backgroundColor: 'black'
		};
		
		return(
			React.createElement("div", {style: style}, 
				React.createElement("div", {style: itemStyle})
			)
		);
	}
});



React.render(	
		React.createElement(Wrapper, null),
	document.getElementById('content')
);


