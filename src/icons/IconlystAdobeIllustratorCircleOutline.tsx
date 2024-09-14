import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeIllustratorCircleOutline = ({
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
      d="M10.366 7.848a.75.75 0 0 1 .688.442l3.062 6.803a.75.75 0 1 1-1.368.616l-2.368-5.262-2.3 5.254a.75.75 0 0 1-1.373-.6l2.976-6.804a.75.75 0 0 1 .683-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.446 13.963H8.32v-1.5h4.125zM16.15 10.684a.75.75 0 0 1 .75.75V15.4a.75.75 0 0 1-1.5 0v-3.966a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.363 9.086a.786.786 0 1 1 1.572 0 .786.786 0 0 1-1.572 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeIllustratorCircleOutline;
