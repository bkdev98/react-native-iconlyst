import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward30sOutline = ({
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
      d="M2.334 12a9 9 0 0 1 17.998-.204.75.75 0 0 1-1.5.034 7.5 7.5 0 1 0-1.323 4.427.75.75 0 0 1 1.234.853A9 9 0 0 1 2.333 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.459 9.151a.75.75 0 0 1 .275 1.025l-1.28 2.22a.75.75 0 0 1-1.025.275l-2.208-1.274a.75.75 0 0 1 .75-1.299l1.558.899.905-1.57a.75.75 0 0 1 1.025-.276M6.11 10.555a2.196 2.196 0 1 1 3.848 1.446 2.196 2.196 0 1 1-3.848 1.445.75.75 0 0 1 1.5 0 .696.696 0 1 0 .695-.696.75.75 0 0 1 0-1.5.695.695 0 1 0-.696-.695.75.75 0 0 1-1.5 0M13.474 9.902a.935.935 0 0 0-.935.936v2.323a.935.935 0 0 0 1.87 0v-2.323a.935.935 0 0 0-.935-.936m-2.435.936a2.435 2.435 0 0 1 4.87 0v2.323a2.435 2.435 0 0 1-4.87 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward30sOutline;
