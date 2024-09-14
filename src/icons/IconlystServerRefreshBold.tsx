import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRefreshBold = ({
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
      d="M16.244 8.06h-4.5a.749.749 0 1 1 0-1.5h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m13.6-.35c0-3.17-2.25-5.3-5.6-5.3h-7.9c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM7.544 17.26h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m5.583-4c.21-.202.075-.6-.218-.6H2.444a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h4.157c.246 0 .391-.284.266-.495a6.14 6.14 0 0 1-.853-3.146c0-1.77.732-3.371 1.913-4.508M21.106 16.69a.75.75 0 0 0-.75.75 2.62 2.62 0 0 1-2.65 2.65q-.23 0-.457-.04l.276-.13a.751.751 0 0 0-.638-1.358l-1.7.8a.75.75 0 0 0-.161 1.254 4.25 4.25 0 0 0 2.68.974c2.327 0 4.15-1.823 4.15-4.15a.75.75 0 0 0-.75-.75M15.256 17.64a2.645 2.645 0 0 1 3.108-2.609l-.277.13a.749.749 0 1 0 .639 1.357l1.699-.799a.75.75 0 0 0 .16-1.255 4.26 4.26 0 0 0-2.68-.974c-2.326 0-4.15 1.823-4.15 4.15a.75.75 0 0 0 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRefreshBold;
