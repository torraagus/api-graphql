export function formatError(obj) {
  let errors = 'Error: ';
  for (const prop in obj) {
    errors += `${obj[prop]}, `;    
  }
  return errors.substr(0, errors.length-2);;
}
