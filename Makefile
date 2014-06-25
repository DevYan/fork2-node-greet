package: test
	npm pack

test: compile
	mocha

compile:
	coffee --compile --output lib src


.PHONY: compile
