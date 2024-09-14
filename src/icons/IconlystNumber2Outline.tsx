import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber2Outline = ({
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
      d="M6.089 9.044a6.413 6.413 0 0 1 6.41-6.411 6.413 6.413 0 0 1 6.412 6.41c0 2.003-.842 3.506-1.9 4.629-.864.916-1.952 1.654-2.789 2.222l-.027.018-.256.175c-.513.35-.943.658-1.298.946h3.72a2.55 2.55 0 1 1 0 5.1h-7.72a2.55 2.55 0 0 1-2.55-2.55c0-4.315 3.095-6.427 4.96-7.7l.212-.145c.958-.652 1.583-1.083 2.036-1.564.387-.41.512-.717.512-1.13 0-.723-.588-1.311-1.311-1.311s-1.311.588-1.311 1.31a2.55 2.55 0 0 1-5.1 0m6.41-4.911a4.913 4.913 0 0 0-4.91 4.91 1.05 1.05 0 1 0 2.1 0 2.813 2.813 0 0 1 2.81-2.81 2.813 2.813 0 0 1 2.812 2.81c0 .878-.333 1.537-.92 2.16-.578.613-1.34 1.132-2.23 1.738l-.252.172c-1.901 1.298-4.317 3.008-4.317 6.47 0 .58.47 1.05 1.05 1.05h7.719a1.05 1.05 0 1 0 0-2.1h-5.436a.75.75 0 0 1-.639-1.143c.597-.971 1.613-1.727 2.807-2.542l.26-.177c.863-.585 1.825-1.242 2.566-2.028.862-.915 1.492-2.066 1.492-3.6 0-2.71-2.2-4.91-4.911-4.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber2Outline;
