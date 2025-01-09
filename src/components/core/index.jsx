import React from 'react';
import './core.css';

const Core = ({ extraStyle = '', image, alt, tittle, description }) => {

    const coreClass = `core${extraStyle}`;
    const imgClass = `img-core${extraStyle}`;

    return (
        <div className={coreClass}>
            <img src={image} alt={alt} className={imgClass} />
            <p className='tittle-core'>{tittle}</p>
            {
                tittle === 'Email' ? (
                    <a href={`mailto:${description}`} className='description-core'>
                        {description}
                    </a>
                ) : (
                    <p className='description-core'>{description}</p>
                )
            }
        </div>
    );
}

export default Core;
