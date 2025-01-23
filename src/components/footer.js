import React from 'react';

export default function Footer() {
  return (
    <div className="w-full justify-center space-x-2 bg-slate-100 p-5 text-center text-gray-400 md:flex">
      <div>Created by Edd-v2</div>
      <div>
        <a
          href="https://github.com/Edd-v2/react-portfolio"
          target={'_blank'}
          rel="noreferrer"
          className="text-cyan-500"
        >
          ( Repo Link )
        </a>
      </div>
    </div>
  );
}
