"use client";
import { Workout } from '@/types/workOutTypes';
import React, { createContext, ReactNode, SetStateAction, useState } from 'react';


interface FitLogContextType {
    plan: Workout[];
    setPlan: React.Dispatch<SetStateAction<Workout[]>>;
    saved: Workout[];
    setSaved: React.Dispatch<SetStateAction<Workout[]>>;
}

export const FitLogContext = createContext<FitLogContextType>({
    plan: [],
    setPlan: () => {},
    saved: [],
    setSaved: () => {}
});

const FitLogProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    };
    return <FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
};

export default FitLogProvider;