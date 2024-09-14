import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoScanLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.171 8.188H9.598c-1.245 0-2.026.881-2.026 2.128v3.367c0 1.249.777 2.13 2.026 2.13h3.573c1.25 0 2.026-.882 2.026-2.13v-3.367c0-1.247-.777-2.129-2.026-2.129"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.193 10.941 1.793-1.467a.68.68 0 0 1 1.11.527l-.007 4a.679.679 0 0 1-1.11.523l-1.786-1.466M3.834 8.47V6.893A3.893 3.893 0 0 1 7.727 3h1.289M3.834 15.531v1.577A3.89 3.89 0 0 0 7.727 21h1.257M21.834 15.531v1.577A3.89 3.89 0 0 1 17.941 21h-1.289M21.834 8.47V6.893A3.893 3.893 0 0 0 17.94 3h-1.257"
    />
  </Svg>
);
export default IconlystVideoScanLight;