import * as React from "react"
import styles from './PopularPurpleSvg.module.css'
const PopularPurpleSvg = () => (
<div className={styles.position}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1001}
        height={1007}
        fill="none"
    >
        <g filter="url(#a)">
        <path
            fill="#7D2253"
            d="M739.258 599.799c-41.82 64.822-136.98 217.176-269.541 131.656-132.56-85.521-252.323-376.531-210.503-441.353 41.819-64.822 183.182-48.043 315.743 37.478 132.56 85.52 206.12 207.397 164.301 272.219Z"
        />
        </g>
        <defs>
        <filter
            id="a"
            width={1000.24}
            height={1006.24}
            x={0.741}
            y={0.636}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
        >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
            result="effect1_foregroundBlur_1_22"
            stdDeviation={125}
            />
        </filter>
        </defs>
    </svg>
</div>
)
export default PopularPurpleSvg