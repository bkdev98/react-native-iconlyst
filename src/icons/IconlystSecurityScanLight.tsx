import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSecurityScanLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.999 16.152v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M21 16.152v1.577a3.893 3.893 0 0 1-3.894 3.892h-1.289M2.999 9.09V7.513a3.89 3.89 0 0 1 3.893-3.892h1.289M21 9.09V7.513a3.89 3.89 0 0 0-3.892-3.892H15.85M17.873 12.219H6.13M16.287 12.221v-1.772c0-1.168-.95-2.117-2.106-2.117H9.82a2.11 2.11 0 0 0-2.107 2.117v1.772M16.287 14.797c0 1.167-.95 2.106-2.106 2.106H9.82a2.1 2.1 0 0 1-2.107-2.106"
    />
  </Svg>
);
export default IconlystSecurityScanLight;
