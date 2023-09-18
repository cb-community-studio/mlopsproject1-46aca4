// diabetes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'diabetes';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      Number_of_times_pregnant: { type: Object},
      Plasma_glucose_concentration: { type: Object },
      Diastoli_blood_pressure: { type:Object },
      Triceps_skin_fold_thickness: { type: Object },
      Hour2_serum_insulin: { type: Object },
      Body_mass_index: { type: Object },
      Diabetes_pedigree_function: { type: Object },
      Age: { type: Object },
      Class_variable: { type: Object },
    },
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
