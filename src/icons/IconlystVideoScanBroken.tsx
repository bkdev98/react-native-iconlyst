import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoScanBroken = ({
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
      d="M12.421 8.188c1.25 0 2.026.881 2.026 2.128v3.367c0 1.249-.777 2.13-2.026 2.13H8.848c-1.249 0-2.026-.882-2.026-2.13v-3.367c0-1.247.781-2.129 2.026-2.129h.787"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.443 10.941 1.793-1.467a.68.68 0 0 1 1.11.527l-.007 4a.679.679 0 0 1-1.11.523l-1.786-1.466M3.084 8.47V6.893A3.893 3.893 0 0 1 6.977 3h1.289M3.084 15.531v1.577A3.89 3.89 0 0 0 6.977 21h1.257M21.084 15.531v1.577A3.89 3.89 0 0 1 17.191 21h-1.289M21.084 8.47V6.893A3.893 3.893 0 0 0 17.19 3h-1.257"
    />
  </Svg>
);
export default IconlystVideoScanBroken;
