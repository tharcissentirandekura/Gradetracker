import { Assignment } from '../types';

export function getAssignmentTypeStyles(type: Assignment['type']): string {
  switch (type) {
    case 'Lab':
      return 'bg-purple-100 text-purple-800';
    case 'Quiz':
      return 'bg-green-100 text-green-800';
    case 'Assignment':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}