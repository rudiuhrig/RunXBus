/**
 * PersistenceService: service to store data across the application 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */
app.factory('PersistenceService', function() {
    var persistedData    = null;
    var persistedFilters = null;

    //I would try to keep a more clear API here by using something like
    // return {
    //     data: {
    //         persist: function(data) {
    //             persistedData = data;
    //         },
    //         clear: function() {
    //             persistedData = null;
    //         },
    //         get: function() {
    //             return persistedData; 
    //         }
    //     },
    //     filters: {
    //         persist: function(data) {
    //             persistedFilters = data;
    //         },
    //         clear: function() {
    //             persistedFilters = null;
    //         },
    //         get: function() {
    //             return persistedFilters; 
    //         }
    //     }
    // };
    
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