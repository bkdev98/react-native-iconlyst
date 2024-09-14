import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleClockBulk = ({
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
      d="M19.95 12.75a.75.75 0 0 1 0-1.5h1.758c.175 0 .313-.15.293-.324a9.505 9.505 0 0 0-8.358-8.356.293.293 0 0 0-.323.293v1.758a.75.75 0 0 1-1.5 0V2.863a.293.293 0 0 0-.323-.293 9.506 9.506 0 0 0-8.358 8.356.293.293 0 0 0 .294.324h1.76a.75.75 0 0 1 0 1.5h-1.76a.293.293 0 0 0-.294.323 9.506 9.506 0 0 0 8.358 8.358.293.293 0 0 0 .323-.294V19.38a.75.75 0 0 1 1.5 0v1.757c0 .175.15.313.323.294a9.505 9.505 0 0 0 8.358-8.358.293.293 0 0 0-.293-.323z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.061 14.956a.75.75 0 0 1-1.029.258l-3.175-1.9a.75.75 0 0 1-.364-.644V8.58a.75.75 0 1 1 1.5 0v3.495a.3.3 0 0 0 .146.257l2.664 1.595a.75.75 0 0 1 .258 1.029"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleClockBulk;
