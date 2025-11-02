import { useState, useCallback } from "react";
import { ValidateFunctionType } from "@/common/helpers/validators";

const useInput = (initialValue: string, validator: ValidateFunctionType, formatter?: (value: string) => string) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        
        if (formatter) {
            newValue = formatter(newValue);
        }
        
        setValue(newValue);
        setError(validator(newValue));
    }, [validator, formatter]);

    const handleChange = (value: string) => {
        let processedValue = value;
        
        if (formatter) {
            processedValue = formatter(processedValue);
        }
        
        setValue(processedValue);
    }

    const reset = useCallback(() => {
        setValue(initialValue);
        setError('');
    }, [initialValue]);

    const handleCheck = useCallback((currentValue: string) => {
        const newError = validator(currentValue);
        setError(newError);
        return newError;
    }, [validator])

    return {
        value,
        onChange,
        error,
        setError,
        handleCheck,
        handleChange,
        reset,
    };
};

export default useInput;