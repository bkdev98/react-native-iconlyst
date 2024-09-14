import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar7Boldsharp = ({
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
      d="M22.59 9.679h-7.896L12.25 2.171 9.807 9.679H1.91l6.392 4.641-2.442 7.509 6.39-4.641 6.39 4.641-2.442-7.509z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar7Boldsharp;
