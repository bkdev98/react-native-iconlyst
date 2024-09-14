import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.306 15.184a7 7 0 0 1-.054-.847V9.652a6.645 6.645 0 0 1 13.289 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.896 6.703a3.44 3.44 0 0 0-3.437 3.437v.937M7.459 13.875a3.43 3.43 0 0 0 1.329 2.714M14.33 10.143a3.42 3.42 0 0 0-.91-2.33M10.898 21.009a6.64 6.64 0 0 1-5.638-3.126M17.153 15.087l.1.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.221 2.225l-.101.273-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225zM12.471 12.73a2.11 2.11 0 0 0 1.404 1.407c-.672.205-1.2.733-1.404 1.407a2.11 2.11 0 0 0-1.404-1.407 2.11 2.11 0 0 0 1.404-1.407"
    />
  </Svg>
);
export default IconlystTouchIdAiLight;
