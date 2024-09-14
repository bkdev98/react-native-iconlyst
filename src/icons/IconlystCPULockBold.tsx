import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCPULockBold = ({
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
      d="M13.383 12.237h-2.769a.623.623 0 0 0-.623.621v1.56c0 .341.28.62.623.62h2.769a.623.623 0 0 0 .624-.62v-1.56a.623.623 0 0 0-.624-.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.507 14.418c0 1.17-.953 2.12-2.124 2.12h-2.769a2.124 2.124 0 0 1-2.123-2.12v-1.56c0-.799.451-1.489 1.106-1.85v-.52a2.394 2.394 0 0 1 2.374-2.38H12a2.405 2.405 0 0 1 2.402 2.371v.53a2.11 2.11 0 0 1 1.105 1.85zm5.494-.46h-1.529v-3.27h1.529a.75.75 0 0 0 0-1.5h-1.534c-.026-2.597-1.704-4.34-4.198-4.34h-.132v-1.52a.75.75 0 0 0-1.5 0v1.52h-3.273v-1.52a.75.75 0 0 0-1.5 0v1.52h-.132c-2.498 0-4.178 1.743-4.205 4.34H2.999a.75.75 0 1 0 0 1.5h1.523v3.27H2.999a.75.75 0 0 0 0 1.5h1.527c.023 2.597 1.705 4.34 4.206 4.34h.132v1.52a.75.75 0 0 0 1.5 0v-1.52h3.273v1.52a.75.75 0 0 0 1.5 0v-1.52h.132c2.497 0 4.177-1.743 4.199-4.34h1.533a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.902 10.487a.9.9 0 0 0-.903-.879h-.011a.9.9 0 0 0-.891.892v.237h1.805z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCPULockBold;
