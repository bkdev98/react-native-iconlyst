import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2Light = ({
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
      d="M6.947 9.174a5.054 5.054 0 0 0 5.55 5.03c2.627-.25 4.557-2.607 4.557-5.247V7.43a1.12 1.12 0 0 0-1.121-1.121H8.068c-.619 0-1.12.502-1.12 1.121z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.459 3v3.31M14.541 3v3.31M16.54 21c0-.74-.612-1.34-1.367-1.34h-1.057c-1.166-.006-2.11-.93-2.116-2.073V14.39"
    />
  </Svg>
);
export default IconlystPowerOutlet2Light;
