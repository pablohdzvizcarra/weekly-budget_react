export const checkBudget = (budget, remaining) => {
  let styleClass;

  if ( ( budget / 4 ) > remaining ) {
    styleClass = 'bg-red-700 my-2 py-2 px-2 opacity-50 mx-2 w-full ';
  } else if( ( budget / 2 ) > remaining ) {
    styleClass = 'bg-yellow-500 my-2 py-2 px-2 opacity-50 mx-2 w-full ';
  } else {
    styleClass = 'bg-indigo-500 my-2 py-2 px-2 opacity-50 mx-2 w-full ';
  }

  return styleClass;
}