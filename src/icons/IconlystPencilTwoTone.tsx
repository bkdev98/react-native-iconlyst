import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.86 3H8.281C5.346 3 3.504 5.081 3.504 8.026v7.947C3.504 18.919 5.337 21 8.282 21h8.435c2.948 0 4.78-2.081 4.78-5.027v-3.581"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.661 14.308-1.27.213a1.424 1.424 0 0 1-1.65-1.557l.142-1.31a3.05 3.05 0 0 1 .758-1.703l5.535-6.043a1.745 1.745 0 0 1 2.465-.095l1.168 1.082c.707.654.75 1.757.095 2.464l-5.475 5.975a3.05 3.05 0 0 1-1.768.974"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.004 5.203 3.728 3.45"
    />
  </Svg>
);
export default IconlystPencilTwoTone;
