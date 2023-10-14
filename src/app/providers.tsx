"use client";
import React from "react";
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <>
    {children}
    <Next13ProgressBar color='#276968' options={{ showSpinner: false }} />
    </>;
  };
  
  export default Providers;