const dev = process.env.NODE_ENV !== 'production';
const domainName = 'https://www.mydomain.com'

export const server = dev ? 'http://localhost:3000' : domainName;