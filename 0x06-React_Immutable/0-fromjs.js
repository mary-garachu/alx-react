const { fromJS } = require('immutable');

function getImmutableObject(object) {
    // Convert the object to an immutable Map using fromJS
    return fromJS(object);
}