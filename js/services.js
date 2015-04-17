/*
* PersistentThings: service to store data across the application
*/
app.factory('PersistenceService', function() {
    var persistedData = null;

    return {
        persist: function(data) {
            persistedData = data;
        },
        clear: function() {
            persistedData = null;
        },
        get: function() {
            return persistedData; 
        }
    };
});