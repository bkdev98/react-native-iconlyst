import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZapierSquareTwoTone = ({
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
      d="m8.46 8.473 1.423 1.416M14.113 14.117l1.427 1.414M9.885 14.11 8.46 15.526M15.54 8.469l-1.425 1.417M17.005 12.004H14.5M9.5 12.004H7.005M11.997 7.008V9.5M11.997 14.5v2.492"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.114 14.116A6 6 0 0 0 14.5 12v0c0-.721-.13-1.436-.384-2.111A6 6 0 0 0 12 9.5v0a6 6 0 0 0-2.113.384A6 6 0 0 0 9.5 12v0c0 .721.131 1.436.385 2.111A6 6 0 0 0 12 14.5v0a6 6 0 0 0 2.114-.384"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystZapierSquareTwoTone;
