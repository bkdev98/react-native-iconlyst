import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketOutlinesharp = ({
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
      d="M14.71 4.582v3.739h-1.5V4.582zM14.71 17.078v3.372h-1.5v-3.372zM14.71 9.72v5.959h-1.5v-5.96z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 4.35h20v6.912h-.75c-.71 0-1.263.56-1.263 1.24 0 .677.553 1.237 1.263 1.237h.75v6.911h-20v-6.91H3c.71 0 1.263-.56 1.263-1.239 0-.64-.513-1.161-1.263-1.161h-.75zm1.5 1.5v4.086c1.139.3 2.013 1.275 2.013 2.565a2.74 2.74 0 0 1-2.013 2.637v4.012h17v-4.012a2.74 2.74 0 0 1-2.013-2.637c0-1.264.854-2.315 2.013-2.637V5.85z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketOutlinesharp;
