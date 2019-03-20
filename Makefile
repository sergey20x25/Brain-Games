install:
	npm install
start:
	npx babel-node src/bin/brain-progression.js
publish:
	npm publish
lint:
	npx eslint .
build:
	rm -rf dist
	npm run build