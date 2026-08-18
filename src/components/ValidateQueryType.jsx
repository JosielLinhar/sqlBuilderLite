export function ValidateQueryType(queryType, column = null) {
  switch (queryType) {
    case 'update':
      if (column === 'fields') {
        return 'Column'
      }
      return 'Where'
      break;
    case 'insert':
      if (column === 'values') {
        return 'Value';
        break;
      }
      return 'Column'
      break;
    case 'select':
      if (column === 'fields') {
        return 'Field';
        break;
      }
      return 'Where'
      break;
  }
}