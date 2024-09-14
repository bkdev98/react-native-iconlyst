import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenSendOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.408 20.67H7.395a5.01 5.01 0 0 1-3.6-1.334 4.65 4.65 0 0 1-1.291-3.386v-5.282a3.45 3.45 0 0 1 .445-1.71c.26-.469.624-.873 1.062-1.183L9.58 3.9a3.15 3.15 0 0 1 3.628 0l2.389 1.656a.751.751 0 0 1-.856 1.233l-2.393-1.66a1.65 1.65 0 0 0-1.907 0L4.87 9.006a2.05 2.05 0 0 0-.61.685 2 2 0 0 0-.256.978v5.282a3.19 3.19 0 0 0 .85 2.323 3.47 3.47 0 0 0 2.52.9h8.033a3.48 3.48 0 0 0 2.524-.9 3.2 3.2 0 0 0 .849-2.324v-1.53a.75.75 0 0 1 1.5 0v1.53a4.65 4.65 0 0 1-1.291 3.387 4.93 4.93 0 0 1-3.581 1.334"
    />
    <Path
      fill={props.color}
      d="M11.417 15.509a3.8 3.8 0 0 1-2.362-.825L3.133 9.91a.75.75 0 0 1 .941-1.168L9.99 13.51a2.3 2.3 0 0 0 2.856 0l.678-.55a.75.75 0 0 1 .944 1.167l-.684.552a3.8 3.8 0 0 1-2.367.829"
    />
    <Path
      fill={props.color}
      d="M16.94 15.467a5.03 5.03 0 0 1-3.579-1.484 5.06 5.06 0 1 1 3.58 1.484m0-8.623a3.561 3.561 0 0 0-2.518 6.079 3.65 3.65 0 0 0 5.037 0 3.56 3.56 0 0 0-2.519-6.08"
    />
    <Path
      fill={props.color}
      d="M17.651 12.675a.75.75 0 0 1-.75-.737l-.026-1.47-1.472-.027a.75.75 0 0 1-.677-1.052.74.74 0 0 1 .705-.448l2.194.039a.75.75 0 0 1 .736.737l.04 2.194a.75.75 0 0 1-.736.764z"
    />
    <Path
      fill={props.color}
      d="M14.06 14.034a.75.75 0 0 1-.531-1.28L17.084 9.2a.75.75 0 0 1 1.06 1.06l-3.554 3.554a.74.74 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystEmailOpenSendOutline;
