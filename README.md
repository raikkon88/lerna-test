# Tutorials that has been found :

- Yarn workspaces: https://www.youtube.com/watch?v=G8KXFWftCg0
- lerna packages: https://www.youtube.com/watch?v=p6qoJ4apCjA
- Github packages: https://www.youtube.com/watch?v=2-77KhGWlRg

# Another resources

- lerna githu pages :  https://github.com/lerna/lerna
- workspaces yarn : https://classic.yarnpkg.com/en/docs/workspaces/

- medium article about workspaces and monorepos : https://medium.com/@masoodhussain02/create-a-react-component-library-using-yarn-workspace-and-publish-5ab486b4ea3b
- Medium article about workspaces and monorepos : https://medium.com/naresh-bhatia/sharing-ui-components-with-lerna-and-yarn-workspaces-be1ebca06efe
- Template to follow to do this approach : https://github.com/nareshbhatia/lerna-workspaces-react-ts
- Template to follow to do this approach (with Material UI) : https://github.com/nareshbhatia/react-mobx-mui-ts-monorepo
- Tutorial to use lerna and github repos with yarn : https://viewsource.io/publishing-and-installing-private-github-packages-using-yarn-and-lerna/

# Steps to configure

## Generate a personal access token on github.

Navigate to the settings page -> generate a personal access token with the permissions :

- write:packages
- read:packages

If you also wants to use github actions you can select the github actions permission.

## Set ut the npmrc authentication global

We have to configure the access to the npm.pkg.github.com to use authentication with the access token still generated.

Create an npmrc into your user folder. ~/.npmrc and paste the following but changing the ACCESS_TOKEN to your access token value generated in the previous section

```
//npm.pkg.github.com/:_authToken=ACCESS_TOKEN
```

## Configure npmrc locally in the project.

Create a file named .npmrc into the project that you need to publish and put the following content :

```
@raikkon88:registry=https://npm.pkg.github.com
```

Configure the package.json with the name of the repository in which you need to publish the package. You need to set up the name of the package as "@OWNER/package-name" where @OWNER is the name of the github user which owns this repo and packages related and the package-name is the name of the repository.

I.E. My user in github is raikkon88 and this project name is lerna-test

```
"name":"@raikkon88/lerna-test"
```

Add the repository url of the project into the package.json file.

```
"repository": "https://github.com/raikkon88/lerna-test",
```
