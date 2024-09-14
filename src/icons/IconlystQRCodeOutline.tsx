import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeOutline = ({
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
      d="M5.1 3.992a1.1 1.1 0 0 0-1.1 1.1v3.049a1.1 1.1 0 0 0 1.1 1.1H8.15a1.1 1.1 0 0 0 1.1-1.1V5.093a1.1 1.1 0 0 0-1.1-1.1zm-2.6 1.1a2.6 2.6 0 0 1 2.6-2.6H8.15a2.6 2.6 0 0 1 2.6 2.6v3.049a2.6 2.6 0 0 1-2.6 2.6H5.1a2.6 2.6 0 0 1-2.601-2.6z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.625 5.867a.75.75 0 0 1 .75.75v.012a.75.75 0 1 1-1.5 0v-.012a.75.75 0 0 1 .75-.75M6.625 17.113a.75.75 0 0 1 .75.75v.012a.75.75 0 0 1-1.5 0v-.012a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.1 15.242a1.1 1.1 0 0 0-1.1 1.1v3.049a1.1 1.1 0 0 0 1.1 1.1H8.15a1.1 1.1 0 0 0 1.1-1.1v-3.048a1.1 1.1 0 0 0-1.1-1.1zm-2.6 1.1a2.6 2.6 0 0 1 2.6-2.6H8.15a2.6 2.6 0 0 1 2.6 2.6v3.049a2.6 2.6 0 0 1-2.6 2.6H5.1a2.6 2.6 0 0 1-2.601-2.6zM13.75 16.343a2.6 2.6 0 0 1 2.6-2.6H19.4a2.6 2.6 0 0 1 2.6 2.6v3.048a2.6 2.6 0 0 1-2.6 2.6H16.35a2.6 2.6 0 0 1-2.601-2.6zm2.6-1.1a1.1 1.1 0 0 0-1.1 1.1v3.048a1.1 1.1 0 0 0 1.1 1.1H19.4a1.1 1.1 0 0 0 1.1-1.1v-3.048a1.1 1.1 0 0 0-1.1-1.1z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.875 17.102a.75.75 0 0 1 .75.75v.011a.75.75 0 1 1-1.5 0v-.011a.75.75 0 0 1 .75-.75M14.5 2.492a.75.75 0 0 1 .75.75v.012a.75.75 0 0 1-1.5 0v-.012a.75.75 0 0 1 .75-.75M17.125 3.242a.75.75 0 0 1 .75-.75h1.905c1.226 0 2.22.995 2.22 2.221v1.904a.75.75 0 0 1-1.5 0V4.713a.72.72 0 0 0-.72-.72h-1.905a.75.75 0 0 1-.75-.75M17.125 9.992a.75.75 0 0 1 .75-.75h3.375a.75.75 0 0 1 0 1.5h-3.375a.75.75 0 0 1-.75-.75M13.75 8.087c0-1.226.995-2.22 2.221-2.22h1.904a.75.75 0 0 1 0 1.5h-1.904a.72.72 0 0 0-.721.72v1.905a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQRCodeOutline;
