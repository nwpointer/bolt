import React from 'react'

function flaten(p){
	var np = Object.assign({}, p);
	delete np.children;
	return np
}

const Page = function({title, ...props}){return(
	<html lang="en">
	<head>
		<meta charSet="UTF-8"/>
		<title>{title}</title>
		<link rel="stylesheet" href="./styles/main.css"/>
	</head>
	<body>
		{props.children}
	</body>
	</html>
)}

export default Page
