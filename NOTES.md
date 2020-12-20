# SETUP

`$ npm init -y` => use -y to set defaults

`$ npm install apollo-server graphql nodemon` =>  nodemon watches for changes and auto restarts server.

* This needs to be added into the scripts key in package.json to make nodemon work by defining the extensions of the files to watch

` "scripts" : {	
	"start" : "nodeman -e js,json,graphql"
}
`

