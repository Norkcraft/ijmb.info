/** @type {import('next').NextConfig} */
const cities = [
  'abuja',
  'lagos',
  'ibadan',
  'ilorin',
  'port-harcourt',
  'benin',
  'kano',
  'kaduna',
  'jos',
  'enugu',
  'owerri',
  'aba',
  'uyo',
  'akure',
  'ado-ekiti',
  'abeokuta',
  'osogbo',
  'minna',
  'lokoja',
  'makurdi'
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return cities.map((city) => ({
      source: `/ijmb-${city}`,
      destination: `/ijmb-in/${city}`,
      permanent: true
    }));
  }
};

export default nextConfig;
