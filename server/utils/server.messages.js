module.exports = {
    AUTHENTICATION_FAILED: {
        code: 401,
        message: 'Authentication failed. Please login with valid credentials.',
        success: false,
    },
    SUCCESSFUL_LOGIN: {
        code: 200,
        message: 'Successfully logged in',
        success: true,
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Something unexpected happened',
        success: false,
    },
    UNAUTHORIZED: {
        code: 401,
        message: 'You session is expired. Please login again',
        success: false,
    },
    SUCCESSFUL_DELETE: {
        code: 200,
        message: 'Successfully deleted',
        success: true,
    },
    SUCCESSFUL_UPDATE: {
        code: 200,
        message: 'Updated successfully',
        success: true,
    },
    SUCCESSFUL: {
        code: 200,
        success: true,
        message: 'Successfully completed',
    },
    NOT_FOUND: {
        code: 404,
        success: true,
        message: 'Requested API not found',
    },
    ALREADY_EXIST: {
        code: 200,
        success: true,
        message: 'Already exists',
    },
    FORBIDDEN: {
        code: 403,
        message: 'You are not authorized to complete this action',
        success: false,
    },
    BAD_REQUEST: {
        code: 400,
        message: 'Bad request. Please try again with valid parameters',
        success: false,
    },
    IN_COMPLETE_REQUEST: {
        code: 422,
        message: 'Required parameter missing',
        success: false,
    },
    USER_EMAIL_EXIST: {
        code: 401,
        message: 'The email address you have entered is already associated with another account.',
        success: false,
    },
    USER_CREATED: {
        code: 200,
        message: 'User is created successfully and verification email has been sent',
        success: true,
    },
    USER_EMAIL_NOT_EXIST: {
        code: 401,
        message: 'The email whihc you entered is not associated with any account. Double-check your email address and try again.\'',
        success: false,
    },
    USER_NOT_VERIFIED: {
        code: 401,
        message: 'Your account has not been verified.',
        success: false,
    },
    TOKEN_NOT_FOUND: {
        code: 400,
        message: 'We were unable to find a valid token. Your token my have expired.',
        success: false,
    },
    USER_NOT_FOUND_WITH_THIS_TOKEN: {
        code: 400,
        message: 'We were unable to find a user for this token.',
        success: false,
    },
    USER_IS_ALREADY_VERIFIED: {
        code: 400,
        message: 'This user has already been verified.',
        success: false,
    }
};
