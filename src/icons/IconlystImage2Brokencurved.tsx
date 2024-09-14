import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Brokencurved = ({
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
      d="M3 12c0 6.937 2.313 9.25 9.25 9.25S21.5 18.937 21.5 12s-2.313-9.25-9.25-9.25S3 5.063 3 12"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.85 8.784a1.76 1.76 0 1 1-1.762-1.76M21.37 14.667c-.88-.906-2.127-2.737-4.416-2.737s-2.339 4.038-4.675 4.038c-2.337 0-3.278-1.37-4.8-.655-.504.236-.976.705-1.383 1.228"
    />
  </Svg>
);
export default IconlystImage2Brokencurved;
