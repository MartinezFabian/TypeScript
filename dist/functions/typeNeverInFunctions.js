"use strict";
function throwError(message) {
    throw new Error(message);
}
try {
    throwError('Authentication Error: Invalid username or password');
}
catch (error) {
    console.log(error.message);
}
