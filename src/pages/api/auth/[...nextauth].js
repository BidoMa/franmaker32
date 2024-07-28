import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as XLSX from 'xlsx';

const getUser = (email, password) => {
  try {
    const filePath = join(process.cwd(), 'src/app/data/users.xlsx');
    const file = readFileSync(filePath);
    const workbook = XLSX.read(file, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const users = XLSX.utils.sheet_to_json(worksheet);

    return users.find(user => user.email === email && user.password === password);
  } catch (error) {
    console.error("Error reading Excel file:", error);
    return null;
  }
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = getUser(credentials.email, credentials.password);
        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  }
});
