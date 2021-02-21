import { Typography } from '@material-ui/core';
import React from 'react';
import { Input } from './Input';

export const RegisterInputs = ({step}) => {
    
    const getStepContent = () => {
        switch (step) {
            case 0: 
                return (
                    <>
                        <Input type="email" placeholder="Email" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                    </>
                );
            case 1:
                return (
                    <>
                        <Input type="email" placeholder="Email" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                    </>
                );
            case 2:
                return (
                    <>
                        <Input type="email" placeholder="Email" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                        <Input type="password" placeholder="Hasło" required />
                    </>
                );
            default:
                return 'Unknown step';
        }
    }

    return (
        <Typography>{getStepContent()}</Typography>
    );
}