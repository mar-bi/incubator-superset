# Dmates modification to ss frontend

1. Added support for custom color schemes

## To add a new color scheme:

1. Go to `./superset/assets/`
2. Run `npm install`
3. Modify `./superset/assets/src/customColors/index.js`
4. Create production build with `yarn prod`
5. Copy `./superset/assets/dist/` to server folder `superset/static/assets/dist/`. Replace the old `dist` folder on the server if necessary.
