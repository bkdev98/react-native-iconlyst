import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2TwoTone = ({
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
      d="M18.251 8.137h.63c1.611 0 2.619 1.134 2.619 2.753v3.456c0 1.611-1.008 2.764-2.618 2.764L6.128 17.1c-1.62 0-2.628-1.134-2.628-2.754V10.89c0-1.61 1.018-2.753 2.628-2.753h4.474"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.9 17.104 6 18.488M18.043 17.104l.9 1.384M6.7 14.065h3.384M6.7 11.459h1.415"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.503 5.512a3.991 3.991 0 1 1 0 7.982 3.991 3.991 0 0 1 0-7.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.87 9.503a1.368 1.368 0 1 0-2.735 0 1.368 1.368 0 0 0 2.736 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystProjectorScreen2TwoTone;
