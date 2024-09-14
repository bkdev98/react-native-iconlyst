import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTemperatureBold = ({
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
      d="M10.49 8.2v5.712a2.114 2.114 0 0 1-.95 4 2.112 2.112 0 0 1-.95-4V8.2a.95.95 0 0 1 1.9 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.741 6.3a3.8 3.8 0 1 1 7.6 0v5.274a5.66 5.66 0 0 1 1.9 4.226 5.7 5.7 0 0 1-11.4 0c0-1.69.745-3.19 1.9-4.226zm3.8-1.9a1.9 1.9 0 0 0-1.9 1.9v5.721a.95.95 0 0 1-.377.758A3.78 3.78 0 0 0 5.74 15.8a3.8 3.8 0 0 0 7.6 0c0-1.23-.596-2.32-1.522-3.02a.95.95 0 0 1-.378-.758V6.3a1.9 1.9 0 0 0-1.9-1.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.043 5.504a1 1 0 0 1 1-1h.558v-.558a1 1 0 1 1 2 0v.558h.558a1 1 0 1 1 0 2h-.558v.559a1 1 0 0 1-2 0v-.559h-.558a1 1 0 0 1-1-1M16.043 9.21a1 1 0 1 0 0 2h3.116a1 1 0 1 0 0-2z"
    />
  </Svg>
);
export default IconlystTemperatureBold;
