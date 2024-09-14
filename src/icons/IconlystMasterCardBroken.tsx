import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCardBroken = ({
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
      d="M12.249 20.29H6.654c-2.715 0-4.404-1.916-4.404-4.63V8.34c0-2.712 1.697-4.63 4.404-4.63h11.19c2.716 0 4.406 1.918 4.406 4.63v7.32c0 2.714-1.69 4.63-4.407 4.63h-1.797"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.53 12.002a3.274 3.274 0 1 1-6.548 0 3.274 3.274 0 0 1 6.548 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.517 12.002a3.274 3.274 0 1 1-6.548 0 3.274 3.274 0 0 1 6.548 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMasterCardBroken;
