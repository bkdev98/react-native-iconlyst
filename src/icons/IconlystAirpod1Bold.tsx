import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpod1Bold = ({
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
      d="M14.428 3.798c-.91.834-1.521 2.004-1.521 3.27v10.129c0 .999.807 1.81 1.803 1.81.998 0 1.804-.812 1.804-1.81v-6h.87c1.483 0 2.846-.711 3.683-1.818a2.32 2.32 0 0 0 .453-1.402V5.635a2.33 2.33 0 0 0-.454-1.404 4.34 4.34 0 0 0-3.244-1.727c-1.257-.058-2.484.459-3.394 1.294m3.247 2.391a.75.75 0 0 1 1.499 0v1.365a.75.75 0 0 1-1.5 0zM9.572 6.291c.91.835 1.521 2.005 1.521 3.271v10.129c0 .998-.807 1.809-1.804 1.809s-1.803-.81-1.803-1.81v-6h-.871a4.64 4.64 0 0 1-3.682-1.817 2.32 2.32 0 0 1-.454-1.403V8.13c0-.499.149-.998.455-1.404a4.34 4.34 0 0 1 3.244-1.727c1.257-.058 2.484.459 3.394 1.293M6.325 8.683a.75.75 0 0 0-1.499 0v1.365a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpod1Bold;
