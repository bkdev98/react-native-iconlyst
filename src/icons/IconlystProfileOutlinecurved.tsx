import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileOutlinecurved = ({
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
      d="M11.962 11.892h.03a5.14 5.14 0 0 0 5.137-5.136 5.143 5.143 0 0 0-5.136-5.137 5.14 5.14 0 0 0-5.137 5.134 5.1 5.1 0 0 0 1.488 3.628 5.09 5.09 0 0 0 3.618 1.511M8.356 6.756a3.64 3.64 0 0 1 3.637-3.637 3.64 3.64 0 0 1 3.636 3.637 3.64 3.64 0 0 1-3.636 3.636h-.028a3.59 3.59 0 0 1-2.557-1.069 3.6 3.6 0 0 1-1.052-2.567M4.406 18.756c0 3.625 5.716 3.625 7.594 3.625 1.877 0 7.595 0 7.595-3.647 0-2.793-3.479-5.153-7.595-5.153s-7.594 2.37-7.594 5.175m1.5 0c0-1.735 2.606-3.675 6.094-3.675s6.095 1.929 6.095 3.653c0 1.424-2.051 2.147-6.095 2.147s-6.094-.715-6.094-2.125"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProfileOutlinecurved;
