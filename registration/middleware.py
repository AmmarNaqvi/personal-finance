from .backends import CustomAuth

class UserAuthMiddleware(object):
    '''
    Middleware that authenticates the current user
    on each request
    '''
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        custom_auth = CustomAuth()

        user = CustomAuth.get_user(custom_auth, user_id=request.user.pk)

        response = self.get_response(request)

        return response

