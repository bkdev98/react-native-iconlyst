import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyHeartBroken = ({
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
      d="M12.25 3a9 9 0 0 0-9 9c0 1.786.52 3.45 1.416 4.849M21.25 12a9 9 0 0 1-9 9 8.96 8.96 0 0 1-5.043-1.545M9.32 10.505V10m6.46.505V10M9.37 14.29c.7.911 1.734 1.48 2.88 1.48s2.18-.569 2.88-1.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.752 5.435c.283-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.402-2.474"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyHeartBroken;
