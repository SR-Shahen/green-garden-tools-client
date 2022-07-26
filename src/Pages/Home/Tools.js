import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://green-garden-tools.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;