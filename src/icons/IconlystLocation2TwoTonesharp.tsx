import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocation2TwoTonesharp = ({
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
      d="M14.65 9.74a2.4 2.4 0 1 0-4.8-.002 2.4 2.4 0 0 0 4.8.001"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.25 22.139c0-3.603-7.023-6.72-7.2-12.427-.124-4.007 3.223-7.573 7.2-7.573 3.976 0 7.322 3.566 7.2 7.573-.178 5.825-7.2 8.727-7.2 12.427Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocation2TwoTonesharp;
