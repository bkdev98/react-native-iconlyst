import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraOutline = ({
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
      d="M12.25 3.75a6.05 6.05 0 0 0-6.052 6.052 6.051 6.051 0 1 0 12.104 0A6.05 6.05 0 0 0 12.25 3.75M4.698 9.802a7.551 7.551 0 1 1 15.104 0 7.552 7.552 0 0 1-15.104 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.228 15.054a.75.75 0 0 1 1.023.28l1.988 3.48c.742 1.31-.204 2.935-1.713 2.935H7.977a1.966 1.966 0 0 1-1.711-2.946l.001-.003 1.995-3.46a.75.75 0 1 1 1.3.749l-1.995 3.46c-.18.316.041.7.41.7h8.55c.358 0 .582-.386.408-.695h-.001l-1.985-3.477a.75.75 0 0 1 .279-1.023M12.252 8.355a1.447 1.447 0 1 0 0 2.895 1.447 1.447 0 0 0 0-2.895M9.305 9.802a2.947 2.947 0 1 1 5.894 0 2.947 2.947 0 0 1-5.894 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebcamCameraOutline;
