import React from 'react'
import { IOptions } from 'types/types'

type Props = {
    options: IOptions[],
    selectedOption: string,
    setSelectedOption: (option: string) => void
}

export const Sort: React.FC<Props> = ({ options, selectedOption, setSelectedOption }) => {

    return (
        <select className='shop__top-select' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map(option =>
                <option value={option.value}>
                    {option.title}
                </option>
            )}
        </select>
    )
}

