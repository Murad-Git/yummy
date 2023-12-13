const date = new Date();
const year = new Intl.DateTimeFormat(`en`, { year: `numeric` }).format(date);
const month = new Intl.DateTimeFormat(`en`, { month: `long` }).format(date);
const day = new Intl.DateTimeFormat(`en`, { day: `2-digit` }).format(date);
export const formattedDate = `${month} ${day}, ${year}`;

export const idGenerator = `id` + Math.random().toString(16).slice(2);
