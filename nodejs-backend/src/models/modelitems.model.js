// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'modelitems';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "_id": { "type": "object", "properties": { "$oid": { "type": "string" } } },
                "Model": { "type": "object" },
                "Accuracy": { "type": "object" },
                "AUC": { "type": "object" },
                "Recall": { "type": "object" },
                "Prec.": { "type": "object" },
                "F1": { "type": "object" },
                "Kappa": { "type": "object" },
                "MCC": { "type": "object" },
                "TT (Sec)": { "type": "object" }
              }
            }
          }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };