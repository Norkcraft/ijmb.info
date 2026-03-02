export const cities = ['abuja','lagos','ibadan','ilorin','port-harcourt','benin','kano','kaduna','jos','enugu','owerri','aba','uyo','akure','ado-ekiti','abeokuta','osogbo','minna','lokoja','makurdi'] as const;

export const displayCity = (slug: string) => slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
