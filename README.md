# Decisions
## Next vs CRA
I decided not to pursue SSR now because of the sake of simplicity, but working an microfrontend environment it should be fairly easy to migrate all the views, components and logics. Every tool added to the chain increases the complexity to mantain babel + typescript working, because we have to bind it's configuration with every webpack config.

# Yarn
Manage workspaces, dependencies between projects and dependencies of external libs

# Lerna
Manage script execution in all projects

# Babel
Compile and transpile js code to browser understable code

# Typescript
Type safety and type checking, leaving ""compilation"" to babel (well, it only removes type checking, hence some small typescript features are unavailable)

# Jest
Test framework. I wired babel to it's config.
We need to set some additional infraestructure to load css, svg, and other media files in general since jest is using webpack with tsc behind the scenes, instead of babel.
As Jest runs in node mode it does not recognize esm modules, so we should use babel-plugin-transform-es2015-modules-commonjs to transform those modules.

# Eslint
Lint tool. It links with typescript, still it does not lint all rules tslint do, yet tslint also does not lint all rules that eslint do.

# CRA and user app
User app is created by using cra. Behind the scenes it uses webpack to compile typescript with tsc.

# Storybook
Stories and features visualization tool. I also wired it to babel config. Still it seem storybook is overriding some babel-loader config, that why we are redifining presets on storybook config.

# Cypress
E2E test framework. TODO

# Prettier
TODO
