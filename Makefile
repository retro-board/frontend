SERVICE_NAME=frontend
GIT_COMMIT=`git rev-parse --short HEAD`
-include .env
export

.PHONY: build-images
build-images:
	nerdctl build --platform=arm64,amd64 --tag containers.home.develbox.info/retro-board/${SERVICE_NAME}:${GIT_COMMIT} -f ./k8s/Dockerfile .
	nerdctl tag containers.home.develbox.info/retro-board/${SERVICE_NAME}:${GIT_COMMIT} containers.home.develbox.info/retro-board/${SERVICE_NAME}:latest

.PHONY: publish-images
publish-images:
	nerdctl push containers.home.develbox.info/retro-board/${SERVICE_NAME}:${GIT_COMMIT} --all-platforms
	nerdctl push containers.home.develbox.info/retro-board/${SERVICE_NAME}:latest --all-platforms

.PHONY: build
build: build-images publish-images

.PHONY: publish
publish: publish-images

.PHONY: deploy
deploy:
	kubectl set image deployment/${SERVICE_NAME} ${SERVICE_NAME}=containers.home.develbox.info/retro-board/${SERVICE_NAME}:${GIT_COMMIT} --namespace=retro-board

.PHONY: build-deploy
build-deploy: build deploy
