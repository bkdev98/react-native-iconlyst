import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVpnOutline = ({
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
      d="M5.356 5.105c3.808-3.807 9.981-3.807 13.789 0 .304.305.57.622.812.938a.75.75 0 0 1-1.19.914 8 8 0 0 0-.683-.79 8.25 8.25 0 0 0-11.668 0 8 8 0 0 0-.685.792.75.75 0 0 1-1.186-.919 10 10 0 0 1 .811-.935M4.089 8.94a.75.75 0 0 1 .974.42l1.252 3.151 1.252-3.15a.75.75 0 0 1 1.394.553l-1.949 4.905a.75.75 0 0 1-1.394 0L3.67 9.913a.75.75 0 0 1 .42-.974m6.086.697a.75.75 0 0 1 .75-.75H12.3a2.273 2.273 0 0 1 0 4.546h-.625v1.077a.75.75 0 1 1-1.5 0zm1.5 2.296h.625a.773.773 0 0 0 0-1.546h-.625zm8.46-2.987a.75.75 0 0 1 .75.75v4.62a.75.75 0 0 1-1.349.454l-2.058-2.713v2.394a.75.75 0 1 1-1.5 0V9.826a.75.75 0 0 1 1.348-.454l2.058 2.714v-2.39a.75.75 0 0 1 .75-.75M4.68 16.905a.75.75 0 0 1 1.052.138c.216.282.439.546.684.79a8.25 8.25 0 0 0 11.667 0m0 0c.243-.243.464-.507.686-.792a.75.75 0 0 1 1.185.919c-.242.311-.505.63-.81.934-3.809 3.808-9.982 3.808-13.79 0a10 10 0 0 1-.812-.937.75.75 0 0 1 .138-1.052"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVpnOutline;
