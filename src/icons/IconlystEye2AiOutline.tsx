import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye2AiOutline = ({
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
      d="M13.822 5.052a.75.75 0 0 1 .918-.53c1.92.513 3.654 1.534 4.917 2.838 1.26 1.3 2.093 2.928 2.093 4.648 0 2.11-1.24 4.082-3.016 5.496A10.96 10.96 0 0 1 12 19.86c-2.535 0-4.947-.933-6.734-2.356C3.49 16.09 2.25 14.118 2.25 12.008a.75.75 0 0 1 1.5 0c0 1.512.905 3.092 2.45 4.323a9.46 9.46 0 0 0 5.8 2.03 9.46 9.46 0 0 0 5.8-2.03c1.546-1.231 2.45-2.81 2.45-4.323 0-1.227-.6-2.5-1.67-3.605-1.067-1.1-2.56-1.986-4.227-2.432a.75.75 0 0 1-.531-.919"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.028 9.573a.75.75 0 0 1 1.049.156 3.827 3.827 0 1 1-6.901 2.278.75.75 0 0 1 1.5 0 2.327 2.327 0 1 0 4.196-1.385.75.75 0 0 1 .156-1.049M5.596 8.855a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782L2.74 6.21a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.78-1.782l.1-.274a.75.75 0 0 1 1.407 0l.101.274A3.01 3.01 0 0 0 8.18 4.7l.273.101a.75.75 0 0 1 0 1.407l-.273.101A3.01 3.01 0 0 0 6.4 8.092l-.1.273a.75.75 0 0 1-.704.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.95.267-.363.587-.683.948-.95M10.906 10.097a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEye2AiOutline;
