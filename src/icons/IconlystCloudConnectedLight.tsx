import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectedLight = ({
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
      d="M19.18 17.106h-4.9a1.82 1.82 0 1 0 0 3.64h4.9a1.82 1.82 0 0 0 0-3.64M19.18 13.465h-4.9a1.82 1.82 0 1 0 0 3.64h4.9a1.82 1.82 0 1 0 0-3.64M3 8.973c0-1.644 1.162-2.61 2.598-2.622 0-1.033.81-3.101 3.1-3.101s3.1 2.068 3.1 3.101c1.437.013 2.598.978 2.598 2.622 0 1.062-.63 1.98-1.54 2.392-.388.155-.77.212-1.06.212h-6.2c-.29 0-.671-.06-1.053-.215A2.62 2.62 0 0 1 3 8.972"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.254 11.578v5.302c0 1.16.94 2.1 2.1 2.1h2.107M12.42 15.21H8.263"
    />
  </Svg>
);
export default IconlystCloudConnectedLight;
