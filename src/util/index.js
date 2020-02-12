export const healthColor = (health) => {
  switch (health) {
    case 'POOR':
      return 'text-danger';
    case 'FAIR':
      return 'text-warning';
    case 'GOOD':
      return'text-success';
    default:
      return '';
  }
}