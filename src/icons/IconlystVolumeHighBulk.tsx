import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeHighBulk = ({
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
      d="M10.452 19.504a3.1 3.1 0 0 0 1.649.486c.486 0 .974-.12 1.436-.36a3.41 3.41 0 0 0 1.807-2.839c.232-3.18.232-6.404 0-9.579-.073-1.216-.773-2.308-1.827-2.85-.993-.513-2.11-.465-3.065.133L7.45 6.371c-.26.163-.636.231-1.012.26a22 22 0 0 1-.868.044h-.017c-.9.032-1.493.053-2.275.704-1.022.855-1.016 2.781-1.011 4.33v.575c-.005 1.55-.01 3.48 1.014 4.336.785.647 1.376.67 2.27.702h.013c.252.01.54.02.916.047.338 0 .719.101.97.258z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.731 16.125a.75.75 0 0 1-.75-.75V8.623a.75.75 0 0 1 1.5 0v6.752a.75.75 0 0 1-.75.75M21.374 17.582a.75.75 0 0 0 1.5 0V6.414a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystVolumeHighBulk;
