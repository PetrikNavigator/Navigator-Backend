### Building and running your application

Build the application by running this command from the project root:
```sh
docker build -f docker/Dockerfile -t navigator-backend .
```
Than start the container by running:
```sh
docker compose -f docker/compose.yaml up
```

Note: the Compose project name is pinned in `docker/compose.yaml` via `name: navigator-backend`, so it won't be derived from the folder name. You can still override it per-run with `docker compose -p <project> ...` or `COMPOSE_PROJECT_NAME=<project> docker compose ...`.

The application will be available at http://127.0.0.1:8001.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)