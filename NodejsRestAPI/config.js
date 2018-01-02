var config = {};
config.endpoint = "https://todoapptestdb.documents.azure.com:443/";
config.primaryKey = "Xbgm1Oz7YJf4RgcRsOumIIAFqlMpQ6e2knPVl8RHySgthNjtGxCEGN0hvUzTczrVTSHYU24VriXQcJvkqVdJdg==";

// ADD THIS PART TO YOUR CODE
config.database = {
    "id": "todoapptestdbdemo"
};

config.collection = {
    "id": "todo"
};

module.exports = config;