import { format } from 'date-fns';

export const log = (msg: string) => {
  const date = format(new Date(), "MM/dd/yyyy");
  
  console.log(`[${date}] logger: ${msg}`);
};