import React from 'react'
import { svgStyles } from './style'

export const Hide = styles => {
    return (
        <svg
            style={svgStyles(styles)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <path d="M14.854,12.536l3.814-3.825c0.644-0.645,0.643-1.689-0.003-2.333s-1.689-0.643-2.333,0.003 l-3.81,3.818L8.668,6.335C8.024,5.689,6.98,5.688,6.335,6.332S5.688,8.019,6.332,8.665l3.86,3.871l-3.743,3.753 c-0.644,0.645-0.643,1.689,0.003,2.333s1.689,0.643,2.333-0.003l3.737-3.747l3.783,3.793c0.322,0.323,0.745,0.485,1.168,0.485 c0.422,0,0.843-0.161,1.165-0.482c0.646-0.644,0.646-1.688,0.003-2.333L14.854,12.536z"/>
        </svg>
    )
}
