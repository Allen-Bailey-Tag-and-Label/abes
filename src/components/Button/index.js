export const calculateFlavorClasses = (flavor) => {
  if (flavor === 'secondary')
    return 'bg-secondary-500 focus:ring-secondary-600/[.3] focus:bg-secondary-600 hover:bg-secondary-600';
  if (flavor === 'error')
    return 'bg-red-500 focus:ring-red-600/[.3] focus:bg-red-600 hover:bg-red-600';
  if (flavor === 'success')
    return 'bg-green-600 focus:ring-green-700/[.3] focus:bg-green-700 hover:bg-green-700';
  if (flavor === 'transparent')
    return 'bg-transparent text-current focus:ring-gray-700/[.3] focus:bg-gray-700/[.1] hover:bg-gray-700/[.1] dark:focus:ring-white/[.3] dark:focus:bg-white/[.1] dark:hover:bg-white/[.1]';
  if (flavor === 'outline')
    return 'bg-transparent text-primary-500 font-semibold ring-offset-2 ring-offset-primary-500 focus:ring-primary-500/[.3] focus:bg-transparent hover:bg-transparent';
  return '';
};
