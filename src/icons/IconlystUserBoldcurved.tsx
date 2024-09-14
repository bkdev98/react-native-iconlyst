import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoldcurved = ({
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
      d="M18.725 12.308c-1.14 0-2.21.23-3.11.62 3.15.91 5.38 3.09 5.44 5.64 1.64-.21 3.41-.83 3.41-2.52 0-2.03-2.63-3.74-5.74-3.74M18.695 10.869h.02c2.13 0 3.87-1.74 3.87-3.86a3.88 3.88 0 0 0-3.87-3.87c-.42 0-.82.07-1.2.19a6.36 6.36 0 0 1 1.09 3.58 6.22 6.22 0 0 1-1.2 3.73c.41.15.84.23 1.29.23M8.875 12.918c-.9-.38-1.97-.61-3.1-.61-3.11 0-5.74 1.71-5.74 3.74 0 1.69 1.76 2.3 3.4 2.52.05-2.55 2.28-4.73 5.44-5.65M5.775 10.869h.03c.45 0 .88-.08 1.29-.23a6.3 6.3 0 0 1-1.21-3.73c0-1.33.4-2.56 1.09-3.58-.38-.12-.78-.19-1.2-.19a3.87 3.87 0 0 0-3.86 3.87c0 2.12 1.73 3.86 3.86 3.86"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.245 13.946c-3.961 0-7.308 2.156-7.308 4.708 0 3.3 5.5 3.3 7.308 3.3 3.138 0 7.31-.34 7.31-3.28 0-2.564-3.349-4.728-7.31-4.728M12.246 11.775h.032a4.81 4.81 0 0 0 3.423-1.433 4.8 4.8 0 0 0 1.409-3.43 4.87 4.87 0 0 0-4.864-4.865 4.87 4.87 0 0 0-4.863 4.865 4.87 4.87 0 0 0 4.863 4.863"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBoldcurved;
