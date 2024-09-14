import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleBulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.469 14.348a3.974 3.974 0 0 0-3.97 3.969 3.973 3.973 0 0 0 3.97 3.968 3.973 3.973 0 0 0 3.969-3.968 3.974 3.974 0 0 0-3.97-3.97M18.031 14.348a3.974 3.974 0 0 0-3.969 3.969 3.973 3.973 0 0 0 3.97 3.968A3.973 3.973 0 0 0 22 18.317a3.974 3.974 0 0 0-3.969-3.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.218 6.754a3.974 3.974 0 0 0-3.969-3.97 3.973 3.973 0 0 0-3.968 3.97 3.973 3.973 0 0 0 3.968 3.969 3.974 3.974 0 0 0 3.97-3.97"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoreCircleBulksharp;
