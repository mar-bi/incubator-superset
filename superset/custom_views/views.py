import jwt
# import json
from flask import flash, g, redirect, request
from flask_login import login_user
from flask_appbuilder.security.views import AuthDBView
from flask_appbuilder.views import expose
# from flask_appbuilder._compat import as_unicode

'''Change jwt 'secret' to your own before deployment
    jwt_payload = jwt.decode(token,'secret',algorithms=['HS256'])
'''

class CustomAuthDBView(AuthDBView):

    @expose('/login/', methods=['GET', 'POST'])
    def login(self):
        token = request.args.get('token')
        if token is not None:
            jwt_payload = jwt.decode(token,'secret',algorithms=['HS256'])
            user_name = jwt_payload.get("user_name")
            user = self.appbuilder.sm.find_user(username=user_name)
            if user is not None:
                login_user(user, remember=False)
                redirect_url = request.args.get('redirect')
                if not redirect_url:
                    redirect_url = self.appbuilder.get_url_for_index
                return redirect(redirect_url)
            else:
                return super(CustomAuthDBView, self).login()
        else:
            #flash(as_unicode('Unable to auto login'), 'warning')
            return super(CustomAuthDBView, self).login()

