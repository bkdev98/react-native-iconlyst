import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallAddPlusTwoTone = ({
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
      d="M11.65 12.772c3.715 3.715 4.82-.844 7.185 1.52 2.281 2.28 3.592 2.736.703 5.626-.362.29-2.662 3.79-10.744-4.29C.713 7.548 4.21 5.246 4.5 4.884c2.896-2.896 3.345-1.578 5.627.701 2.364 2.366-2.192 3.473 1.523 7.187"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.655 3.08v5.69M21.5 5.925h-5.69"
    />
  </Svg>
);
export default IconlystPhoneCallAddPlusTwoTone;
