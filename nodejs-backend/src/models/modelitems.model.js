// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'modelitems';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          { 
                modelName: { "type": "object" },
                accuracy: { "type": "object" },
                auc: { "type": "object" },
                recall: { "type": "object" },
                prec: { "type": "object" },
                f1Score: { "type": "object" },
                kappa: { "type": "object" },
                mcc: { "type": "object" },
                TTvalue: { "type": "object" }
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