# Introduction 
IRL UI is a collection of React/Sass/TypeScript components used by IRL Studio applications.

# Getting Started
In order to use IRL UI components, please add this repository as a npm package:
`npm i --save git+https://git@batchku@dev.azure.com/batchku/irlui/_git/irlui`
Keep in mind that a lot of components require ThemeContext to provide theme object. Thus it's recommented to wrap your
app router into <ThemeContext.Provider value={theme}></ThemeContext.Provider> manually constracting theme object for that.

# Contribute
When updating any of the IRL UI components, be aware of the app compatibility, and try to
keep backwards compatibility as much as possible, without introducing to many breaking changes.
After making changes run `npm run build` and push to the master branch to make changes available when installing project as npm package.