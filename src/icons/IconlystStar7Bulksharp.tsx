import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar7Bulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.171 9.807 9.679H1.91l6.392 4.641-2.442 7.509 6.39-4.641z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25 2.171 2.443 7.508h7.897l-6.392 4.641 2.442 7.509-6.39-4.641z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar7Bulksharp;
