import React from 'react' 

export default function Logo({className = '', width = "45", height= "45"}) {
  return (
  <svg className={className} width={width} height={height} viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.00098" y="4.06307" width="253" height="253" rx="6" transform="rotate(-0.0140592 4.00098 4.06307)" fill="black" stroke="black" strokeWidth="8"/>
    <rect className={`fill-white`} x="12" y="13" width="237.993" height="236.02" rx="10" transform="rotate(-0.245055 12 13)"/>
    <rect x="26" y="25.441" width="95" height="95" rx="9" transform="rotate(-0.265975 26 25.441)" fill="black"/>
    <rect x="140" y="137.441" width="95" height="95" rx="9" transform="rotate(-0.265975 140 144.441)" fill="black"/>
    <rect x="140" y="25.441" width="95" height="95" rx="9" transform="rotate(-0.265975 140 25.441)" fill="black"/>
  </svg>
  )
}
