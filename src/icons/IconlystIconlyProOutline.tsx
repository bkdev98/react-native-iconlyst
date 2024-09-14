import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.306 5.1c3.893-3.8 10.197-3.8 14.09 0a.75.75 0 0 1 0 1.073l-2.568 2.505a.75.75 0 0 1-1.047 0c-1.893-1.846-4.968-1.846-6.86 0a4.614 4.614 0 0 0 0 6.644c1.892 1.846 4.967 1.846 6.86 0a.75.75 0 0 1 1.047 0l2.567 2.505a.75.75 0 0 1 0 1.074C16.504 22.7 10.2 22.7 6.306 18.9a9.6 9.6 0 0 1 0-13.802m12.467.56c-3.33-2.707-8.295-2.537-11.42.513a8.1 8.1 0 0 0 0 11.654c3.125 3.05 8.09 3.22 11.42.513l-1.499-1.463c-2.486 1.921-6.103 1.76-8.4-.482a6.114 6.114 0 0 1 0-8.79c2.297-2.243 5.914-2.403 8.4-.482z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProOutline;
