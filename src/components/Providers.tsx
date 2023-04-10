'use client'

import { ReactNode } from "react";
import { ThemeProvider} from 'next-themes';
import {SessionProvider} from 'next-auth/react';
interface ProvidersProps {
    
}
 
const Providers = ({children}: {children: ReactNode}) => <ThemeProvider attribute="class" defaultTheme="system">
    <SessionProvider>{children}</SessionProvider>
</ThemeProvider>
 
export default Providers;