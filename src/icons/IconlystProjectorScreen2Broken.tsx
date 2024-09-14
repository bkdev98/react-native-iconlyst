import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.102 8.137H5.628C4.018 8.137 3 9.28 3 10.89v3.456c0 1.62 1.008 2.755 2.628 2.755l6.377.004M17.751 8.137h.63c1.611 0 2.62 1.134 2.62 2.753v3.456c0 1.611-1.009 2.764-2.62 2.764l-3.188-.003M6.4 17.104l-.9 1.384M17.543 17.104l.9 1.384M6.2 14.065h3.384M6.2 11.459h1.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.003 5.512a3.991 3.991 0 1 1 0 7.982 3.991 3.991 0 0 1 0-7.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.37 9.503a1.368 1.368 0 1 0-1.367 1.368"
    />
  </Svg>
);
export default IconlystProjectorScreen2Broken;
