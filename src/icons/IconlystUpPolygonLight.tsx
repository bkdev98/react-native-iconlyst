import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpPolygonLight = ({
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
      d="M12.002 8.129v7.742m0-7.742-3.02 3.031m3.02-3.031 3.018 3.031"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.21 3h5.581c.599 0 1.173.237 1.597.662l3.951 3.95c.424.424.661.998.661 1.598v5.58c0 .6-.237 1.174-.66 1.597l-3.952 3.951a2.26 2.26 0 0 1-1.597.662H9.21a2.26 2.26 0 0 1-1.597-.662l-3.951-3.95A2.26 2.26 0 0 1 3 14.79V9.21c0-.6.238-1.174.662-1.597l3.95-3.951A2.26 2.26 0 0 1 9.21 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpPolygonLight;
