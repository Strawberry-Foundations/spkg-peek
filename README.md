# spkg-peek
API for spkg repositories

## About
The API is used for package querying. It will run under the same server as the spkg repository.

## Endpoints
`/packages/fetch?q=abc`: Retrieves a specific package by its exact name.
`/packages/search?q=abc`: Searches for packages that contain a specified substring in their name.