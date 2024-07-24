import { tv as tvBase, TV } from 'tailwind-variants';

export const tv: TV = (options, config) => {
  console.log('🚀 ~ config:', config);
  console.log('🚀 ~ options:', options);

  return tvBase(options, config);
};
