export default function validate(model) {
  const paths = model.schema ? Object.keys(model.schema.obj) : Object.keys(model);
  return model.validateSync(paths);
};
