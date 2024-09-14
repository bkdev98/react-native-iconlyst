import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize16Bold = ({
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
      d="M16.378 11.473a.75.75 0 0 1-.75.749c-.432-.015-.751-.337-.75-.752l.004-2.102-2.102.004h-.001a.75.75 0 0 1-.002-1.5l2.855-.005a.746.746 0 0 1 .751.751zm-5.155 5.154-2.855.006h-.001a.75.75 0 0 1-.75-.751l.006-2.855a.75.75 0 1 1 1.5.003l-.005 2.102 2.102-.005a.75.75 0 0 1 .003 1.5M15.974 2.75H8.026C4.721 2.75 2.5 4.873 2.5 8.033v8.435c0 3.159 2.221 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.033c0-3.16-2.221-5.283-5.526-5.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize16Bold;
