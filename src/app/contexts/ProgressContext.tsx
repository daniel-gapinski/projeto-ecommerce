"use client";

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import { ReactNode } from "react";

interface ProgressProps {
    children: ReactNode;
}

export function ProgressProviderWrapper ({children}: ProgressProps) {

    return (
        <ProgressProvider
            height="5px"
            color="#fcc800"
            options={{ showSpinner: false }}
        >
            {children}
        </ProgressProvider>
    )
}