/*
* PersistentThings: service to store data across the application
*/
app.factory('PersistenceService', function() {
    var persistedData    = null;
    var persistedFilters = null;

    return {
        persist: function(data) {
            persistedData = data;
        },
        clear: function() {
            persistedData = null;
        },
        get: function() {
            return persistedData; 
        },
        persistFilters: function(data) {
            persistedFilters = data;
        },
        clearFilters: function() {
            persistedFilters = null;
        },
        getFilters: function() {
            return persistedFilters; 
        }
    };
});