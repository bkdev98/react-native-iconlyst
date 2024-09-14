import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 4.885h20v6.911h-.75c-.71 0-1.263.56-1.263 1.24 0 .678.553 1.238 1.263 1.238h.75v6.91h-20v-6.91H3c.71 0 1.263-.56 1.263-1.238 0-.64-.513-1.162-1.263-1.162h-.75zm1.5 1.5v4.086c1.139.3 2.013 1.274 2.013 2.565a2.74 2.74 0 0 1-2.013 2.636v4.013h17v-4.013a2.74 2.74 0 0 1-2.013-2.636c0-1.264.854-2.316 2.013-2.638V6.385z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25 8.1 1.474 2.796 3.114.539-2.203 2.266.45 3.128-2.836-1.394-2.836 1.394.45-3.128-2.203-2.266 3.114-.539zm0 3.215-.493.933-1.04.18.736.757-.15 1.044.946-.466.947.466-.15-1.044.735-.757-1.04-.18z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketStarOutlinesharp;
