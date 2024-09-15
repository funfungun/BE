// response.js

export const response = ({ status, isSuccess, code, message }, result) => {
    return {
        status: status,
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result,
    };
};
