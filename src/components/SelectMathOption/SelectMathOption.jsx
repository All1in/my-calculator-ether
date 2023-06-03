// import { useState } from 'react';
import { Select } from 'antd';

const SelectMathOption = () => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Select
                showSearch
                placeholder="Select an option"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                    {
                        value: '+',
                        label: 'add',
                    },
                    {
                        value: '-',
                        label: 'subtract',
                    },
                    {
                        value: '*',
                        label: 'multiply',
                    },
                    {
                        value: '/',
                        label: 'divide',
                    },
                ]}
             />
        </div>
    );
}

export default SelectMathOption;