import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.256 8.034c2.244-2.191 5.884-2.191 8.128 0l-1.6 1.561a3.546 3.546 0 0 0-4.928 0 3.343 3.343 0 0 0 0 4.81 3.546 3.546 0 0 0 4.928 0l1.6 1.561c-2.244 2.191-5.884 2.191-8.128 0a5.514 5.514 0 0 1 0-7.932"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProSquareLight;
