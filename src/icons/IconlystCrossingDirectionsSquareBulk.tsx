import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.218 2.75H7.784C4.623 2.75 2.5 4.971 2.5 8.276v7.948c0 3.305 2.124 5.526 5.284 5.526h8.434c3.159 0 5.282-2.221 5.282-5.526V8.276c0-3.305-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.43 10.517a.75.75 0 0 1-1.5 0v-.354l-2.086 2.087 2.086 2.086v-.354a.75.75 0 0 1 1.5 0v2.166c0 .009-.005.017-.005.026a.7.7 0 0 1-.053.259.75.75 0 0 1-.407.407c-.049.02-.102.022-.154.03-.044.01-.085.028-.131.028h-2.164a.75.75 0 0 1 0-1.5h.354l-2.087-2.088-2.934 2.934a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l2.934-2.934-2.934-2.935a.749.749 0 1 1 1.061-1.06l2.934 2.934 2.087-2.087h-.354a.75.75 0 0 1 0-1.5h2.164q.15 0 .288.058a.7.7 0 0 1 .178.118c.021.017.046.025.065.044.029.028.041.065.064.096.035.047.074.09.097.145a.75.75 0 0 1 .058.294z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsSquareBulk;
