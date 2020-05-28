# Superset server modification by @mar-bi

## Goals:

1. add a JWT login in order to show charts and metrics via embedded iframes in another (non-superset) client app.
2. login to superset from the client app with a single **'GET'** request which contains a JWT token as a url string parameter. Sending `csrf_token` and `cookies` is not required.
3. keep original superset login with username & password.
4. potentially solve **Safari** browser's default behavior for NOT sending cookies in **CORS** requests. (_still need to verify_).

## Implementation details

- `SupersetSecurityManager` class modified to have an alternative auth view (`authdbview` property).
- `CustomAuthDBView` class added to enable login with JWT tokens.

## Running superset locally

- enable **"CORS"** in `superset_config.py` if `PYTONPATH` is set or in `config.py` otherwise:

```js
ENABLE_CORS = True;
CORS_OPTIONS = {
  supports_credentials: True,
  allow_headers: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept'],
  resources: ['/login/', '/', '/superset/welcome'],
  origins: ['http://localhost:3000'], // your client app host
};
```

## Using JWT login in the client app

- Login to superset with JWT via this endpoint: `SUPER_SET_URL/login/?token=jwt_token`
- JWT token description:
  1. required field in JWT claims - `user_name` should correspond to username in superset
  2. can modify **"secret"** and **algorithm** for JWT right in `superset/custom_view/views.py`

## Credits

I used this article to implement the JWT login to superset - [Tutorial - How to integrate superset in your own application](https://programmer.group/tutorial-how-to-integrate-superset-in-your-own-application.html)
