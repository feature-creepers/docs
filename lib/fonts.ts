import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
});

const code = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
});

/** CSS variables of the three site fonts, to put on `<html>`. */
export const fontVariables = `${body.variable} ${heading.variable} ${code.variable}`;
