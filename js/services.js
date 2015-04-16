/*
* PersistentThings: service to store data across the application
*/
app.factory('PersistentThings', function() {
    var persistedRecipes = null;

    return {
        persistThings: function(recipes) {
            persistedRecipes = recipes;
        },
        clear: function() {
            persistedRecipes = null;
        },
        getThings: function() {
            return persistedRecipes; 
        }
    };
});