
// METHOD TO CONVERT REQUEST PARAMETER OBJECT TO REQUIRED FORMAT E.g. /posts?page=1&size=10
export const convertObjectToRequestParam = (path, paramObject) => {
    let _stringParam = '';
    let _arrayOfKeyAndValue = Object.entries(paramObject);
    let _arrayLength = _arrayOfKeyAndValue.length - 1;
    _arrayOfKeyAndValue.forEach((value, key) => {
        _stringParam = _stringParam + value[0] + "=" + value[1];
        if (key !== _arrayLength) {
            _stringParam = _stringParam + "&";
        }
    });
    return path + "?" + _stringParam;
};

//TO ADD PATH VARIABLES IN URL
export const createPathWithPathVariable = (path, pathVariable) => {
    return (path + "/" + pathVariable);
};

export const createPathWithPathVariableReplace= (path, pathVariable) => {
    return path.replace(':id',pathVariable);
};

export const addObjectAsRequestParam = (path, objVariable, value) => {
    let _encodedObjectValue = encodeURIComponent(JSON.stringify(value));
    return (path + "?" + objVariable + "=" + _encodedObjectValue);
};

