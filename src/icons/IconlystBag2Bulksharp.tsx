import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Bulksharp = ({
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
      d="m22.04 7.499-1.14 14.36H3.6L2.46 7.499z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.71a4 4 0 0 0-4 4v1.862h-1.5V8.71a5.5 5.5 0 0 1 11 0v1.862h-1.5V8.71a4 4 0 0 0-4-4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Bulksharp;
