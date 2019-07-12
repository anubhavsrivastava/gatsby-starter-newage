import React from 'react';
import config from '../../config';

export default function Social() {
  return (
    <ul className="list-inline list-social">
      {config.socialLinks.map(social => {
        const { icon, url } = social;
        return (
          <li key={url} className="list-inline-item  ">
            <a href={url} target="_blank" rel="noreferrer noopener">
              <i className={`fab  ${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
