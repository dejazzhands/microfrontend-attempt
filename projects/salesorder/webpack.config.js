const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "salesorder",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust) also change component to module 
        name: "salesorder",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/salesorder/src/app/app.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "http://localhost:5000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },

          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
