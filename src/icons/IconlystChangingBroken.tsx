import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.541 19.587-.002-2.233 2.22-.002M19.828 5.412l.002 2.233-2.22.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.065 12.557a2.882 2.882 0 1 0-5.763 0 2.882 2.882 0 0 0 5.763 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.803 17.404a8.92 8.92 0 0 0 8.558 3.993M16.98 20.121a8.9 8.9 0 0 0 4.206-7.144M19.568 7.595a8.92 8.92 0 0 0-8.592-3.989M7.392 4.879a8.9 8.9 0 0 0-4.206 7.145"
    />
  </Svg>
);
export default IconlystChangingBroken;
