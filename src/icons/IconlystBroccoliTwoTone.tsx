import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroccoliTwoTone = ({
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
      d="M11.58 14.813a3.5 3.5 0 0 1-1.68.424c-.486 0-.948-.097-1.369-.274a3.363 3.363 0 1 1-2.91-5.851 2.69 2.69 0 0 1 2.751-3.628 3.364 3.364 0 0 1 6.303.106q.359-.114.755-.116A2.496 2.496 0 0 1 17.817 8.7a3.537 3.537 0 0 1-.353 7.056c-.95 0-1.706-.184-2.341-.793"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.765 5.576a2.01 2.01 0 0 0-1.266 2.545M7.304 10.445A1.78 1.78 0 0 0 5.07 9.282"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.244 11.852a3.363 3.363 0 1 0 6.726 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.504 3.35A3.363 3.363 0 0 0 10.799 10a3.35 3.35 0 0 0-.555 1.851M8.31 15.215c.817 0 1.342 2.458 1.342 3.942 0 2.08 4.696 1.901 4.696 0 0-1.484.654-3.942 1.342-3.942"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBroccoliTwoTone;
