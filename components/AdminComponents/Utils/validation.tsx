const validation = (requiredFields,data) => {
const errors = {};

  requiredFields.forEach((field) => {
    if (!data[field]?.trim()) {
      const label = field[0].toUpperCase() + field.slice(1);
      errors[field] = `${label} is required`;
    }
  });

  return errors;
};
export { validation }
