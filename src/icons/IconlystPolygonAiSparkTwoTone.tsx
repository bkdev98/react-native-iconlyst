import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonAiSparkTwoTone = ({
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
      d="M9.21 3h5.581c.599 0 1.173.237 1.597.661l3.951 3.951c.424.424.661.998.661 1.597v5.581c0 .6-.237 1.173-.66 1.597l-3.952 3.95a2.26 2.26 0 0 1-1.597.663H9.21a2.26 2.26 0 0 1-1.597-.662l-3.951-3.951A2.26 2.26 0 0 1 3 14.79V9.209c0-.6.238-1.173.662-1.597l3.95-3.95A2.26 2.26 0 0 1 9.21 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.385 9.859.094.254a3.5 3.5 0 0 0 2.063 2.065l.253.094-.253.094a3.5 3.5 0 0 0-2.063 2.066l-.094.254-.094-.254a3.5 3.5 0 0 0-2.063-2.066l-.253-.094.253-.094a3.5 3.5 0 0 0 2.063-2.065zM8.298 9.314c.159.524.569.934 1.092 1.094-.523.16-.933.57-1.092 1.094a1.64 1.64 0 0 0-1.093-1.094c.523-.16.933-.57 1.093-1.094"
    />
  </Svg>
);
export default IconlystPolygonAiSparkTwoTone;
