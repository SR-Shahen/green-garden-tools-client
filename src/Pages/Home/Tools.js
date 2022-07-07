import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1>tools quantity:{tools.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;