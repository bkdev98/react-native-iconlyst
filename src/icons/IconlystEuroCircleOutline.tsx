import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.608 10.713a3.04 3.04 0 0 1 2.758-1.531.75.75 0 0 0 .058-1.499 4.54 4.54 0 0 0-4.12 2.288l-.002.003a4.25 4.25 0 0 0 0 4.176l.002.003a4.54 4.54 0 0 0 4.12 2.288.75.75 0 1 0-.058-1.499 3.04 3.04 0 0 1-2.758-1.53 2.75 2.75 0 0 1 0-2.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.105 13.129a.75.75 0 0 1 .75-.75h4.236a.75.75 0 0 1 0 1.5H8.855a.75.75 0 0 1-.75-.75M8.105 10.996a.75.75 0 0 1 .75-.75h4.236a.75.75 0 0 1 0 1.5H8.855a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroCircleOutline;
