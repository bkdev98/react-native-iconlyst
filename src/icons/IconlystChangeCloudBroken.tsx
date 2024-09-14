import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeCloudBroken = ({
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
      d="M18.294 19.108c.301 0 .7-.06 1.103-.221A2.73 2.73 0 0 0 21 16.397c0-1.712-1.208-2.717-2.704-2.73 0-1.076-.844-3.23-3.228-3.23s-3.228 2.154-3.228 3.23c-1.496.013-2.705 1.018-2.705 2.73 0 1.105.66 2.059 1.606 2.487.398.162.795.224 1.097.224h3.228M3 16.438l1.28-1.31 1.31 1.282"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.26 15.152v1.295a3.236 3.236 0 0 0 3.236 3.236M13.616 7.847c-.434-.328-.986-.506-1.589-.51 0-1.006-.788-3.017-3.015-3.017S5.997 6.33 5.997 7.337c-1.398.011-2.526.95-2.526 2.549a2.55 2.55 0 0 0 1.5 2.323c.372.151.742.21 1.024.21H8.02M19.05 9.327V8.032a3.236 3.236 0 0 0-3.235-3.235"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.312 8.043-1.28 1.309-1.31-1.282"
    />
  </Svg>
);
export default IconlystChangeCloudBroken;
