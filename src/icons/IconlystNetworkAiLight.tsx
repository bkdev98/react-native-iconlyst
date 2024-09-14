import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetworkAiLight = ({
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
      d="M11.306 20.99a9.01 9.01 0 0 1-8.273-8.986C3.033 7.038 7.062 3 12.037 3c4.601 0 8.385 3.449 8.93 7.899"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.175 8.875C14.706 5.445 13.48 3 12.036 3c-1.433 0-2.67 2.445-3.138 5.875a22 22 0 0 0-.216 3.129c0 1.106.075 2.164.216 3.138.328 2.38 1.34 4.676 2.407 5.847M3.033 12.012h7.435M18.514 14.822l.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225l-.1.273-.102-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.203 13.58a1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178 1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.176-1.179"
    />
  </Svg>
);
export default IconlystNetworkAiLight;
