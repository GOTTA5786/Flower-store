import * as React from "react"
import styles from './PopularBlueSvg.module.css'
const PopularBlueSvg = () => (
<div className={styles.position}>
    <svg xmlns="http://www.w3.org/2000/svg" width={778} height={1391} fill="none">
        <g filter="url(#a)">
        <path
            fill="#43FFD2"
            fillOpacity={0.47}
            d="M398 1132c-51.718 80.16.068-405.347-204-537C-10.068 463.347-79.944 371.315-28.227 291.151c51.718-80.165 259.073-38.425 463.142 93.228C638.983 516.032 449.718 1051.84 398 1132Z"
        />
        </g>
        <defs>
        <filter
            id="a"
            width={1072.14}
            height={1390.48}
            x={-294.605}
            y={0.396}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
        >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
            result="effect1_foregroundBlur_1_21"
            stdDeviation={125}
            />
        </filter>
        </defs>
    </svg>
</div>
)
export default PopularBlueSvg
