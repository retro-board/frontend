SERVICE_NAME=frontend
STACK_TIME=$(shell date " +%y-%m-%d_%H-%M")
GIT_COMMIT=`git rev-parse HEAD`
-include .env
export

.PHONY: build-images
build-images:
	nerdctl build --platform arm64,amd64 --tag registry.chewedfeed.com/retro-board/frontend:${GIT_COMMIT} -f ./k8s/Dockerfile .
	nerdctl tag registry.chewedfeed.com/retro-board/frontend:${GIT_COMMIT} registry.chewedfeed.com/retro-board/frontend:latest
	nerdctl tag registry.chewedfeed.com/retro-board/frontend:${GIT_COMMIT} ghcr.io/retro-board/frontend:${STACK_TIME}
	nerdctl push registry.chewedfeed.com/retro-board/frontend:${GIT_COMMIT}
	nerdctl push registry.chewedfeed.com/retro-board/frontend:latest

.PHONY: build
build: build-images

.PHONY: build-deploy
build-deploy: build
	kubectl apply -f ./k8s/service.yml
