import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitchOutline = ({
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
      d="M5.64 4.25c-.672 0-1.216.544-1.216 1.216v9.599c0 .671.544 1.216 1.216 1.216h.174c.957 0 1.733.776 1.733 1.733v1.37l2.308-2.308c.509-.51 1.2-.795 1.92-.795h4.92c.322 0 .631-.128.86-.356l1.666-1.666c.228-.228.356-.538.356-.86V5.466c0-.672-.544-1.216-1.216-1.216zM2.924 5.466c0-1.5 1.216-2.716 2.716-2.716H18.36c1.5 0 2.716 1.216 2.716 2.716v7.933c0 .72-.286 1.411-.796 1.92l-1.666 1.667c-.51.509-1.2.795-1.92.795h-4.92c-.322 0-.632.128-.86.356l-2.748 2.748c-.782.782-2.12.229-2.12-.878v-1.993a.233.233 0 0 0-.233-.233H5.64a2.716 2.716 0 0 1-2.716-2.716z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 7.441a.75.75 0 0 1 .75.75v3.636a.75.75 0 1 1-1.5 0V8.19a.75.75 0 0 1 .75-.75m4.163 0a.75.75 0 0 1 .75.75v3.636a.75.75 0 1 1-1.5 0V8.19a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitchOutline;
