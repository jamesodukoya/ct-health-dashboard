import { Handjet, Inter, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  // weight: ['400', '700', '800'],
})

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const handjet = Handjet({
    subsets: ['latin'],
    weight: '400',
})