import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTemperatureBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.942 6.3a3.8 3.8 0 1 1 7.6 0v5.274a5.66 5.66 0 0 1 1.9 4.226 5.7 5.7 0 0 1-11.4 0c0-1.69.745-3.19 1.9-4.226zm3.8-1.9a1.9 1.9 0 0 0-1.9 1.9v5.721a.95.95 0 0 1-.377.758 3.78 3.78 0 0 0-1.523 3.02 3.8 3.8 0 0 0 7.6 0c0-1.23-.596-2.32-1.522-3.02a.95.95 0 0 1-.377-.758V6.3a1.9 1.9 0 0 0-1.9-1.9"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.692 8.2v5.712a2.114 2.114 0 0 1-.95 4 2.112 2.112 0 0 1-.95-4V8.2a.95.95 0 0 1 1.9 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.958 3.852a3 3 0 1 0-.001 5.998 3 3 0 0 0 .001-5.998m-1 3a1 1 0 1 1 1.999-.002 1 1 0 0 1-1.998.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTemperatureBulk;
