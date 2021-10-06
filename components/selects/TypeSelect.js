import * as React from 'react';
import { Select } from 'native-base';

const TypeSelect = ({ type, setType, optionsArray, minWidth }) => {
    return (
        <Select minWidth={minWidth} selectedValue={type} onValueChange={(value) => setType(value)}>
            {optionsArray.map((option, i) => <Select.Item label={option} value={option} key={i} />)}
        </Select>
    )
}

export default TypeSelect
