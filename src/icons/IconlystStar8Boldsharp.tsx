import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8Boldsharp = ({
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
      d="m21.839 6.463-7.472 1.874L12.25.93l-2.117 7.407L2.66 6.463l5.363 5.538-5.363 5.536 7.472-1.874 2.117 7.407 2.117-7.408 7.472 1.874L16.477 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar8Boldsharp;
