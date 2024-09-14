import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsHorizontalLeftOutline = ({
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
      d="M20.088 4.36a.75.75 0 0 1 0 1.061l-7.111 7.111a.75.75 0 1 1-1.06-1.06l7.11-7.112a.75.75 0 0 1 1.061 0m-9.777 9.778a.75.75 0 0 1 0 1.06L6.259 19.25h2.63a.75.75 0 0 1 0 1.5h-4.4a.749.749 0 0 1-.794-.75v-4.444a.75.75 0 0 1 1.5 0v2.636l4.055-4.054a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.697 4a.75.75 0 0 1 .75-.75h4.445a.75.75 0 0 1 0 1.5H6.258l13.83 13.83a.75.75 0 0 1-1.06 1.061L5.197 5.811v2.633a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsHorizontalLeftOutline;
