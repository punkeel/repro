.PHONY: all
all:
	npx wrangler@latest versions upload --experimental-gradual-rollouts
