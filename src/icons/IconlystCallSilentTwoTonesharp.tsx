import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11.059 14.78c1.547 1.241 3.014 1.643 3.014 1.643l2.854-1.643 4.61 3.4c-.857 1.533-1.939 2.614-3.471 3.472-3.803.174-7.203-1.517-9.81-3.915"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M6.304 15.633c-2.426-3.056-3.7-6.615-3.254-8.997.868-1.493 1.982-2.598 3.472-3.472l3.24 4.451L8.12 10.47s.22.922.927 2.058"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.265 21.948 18.879 6.36"
    />
  </Svg>
);
export default IconlystCallSilentTwoTonesharp;
