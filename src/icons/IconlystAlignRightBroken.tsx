import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignRightBroken = ({
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
      d="M10.682 20.622H5.818A2.32 2.32 0 0 1 3.5 18.304v-2.066a2.32 2.32 0 0 1 2.318-2.318h9.727a2.32 2.32 0 0 1 2.318 2.318v2.066a2.32 2.32 0 0 1-2.318 2.318h-1.133M10.607 3.377A2.32 2.32 0 0 0 8.29 5.695v2.066a2.32 2.32 0 0 0 2.318 2.318h4.94a2.32 2.32 0 0 0 2.317-2.318V5.695a2.32 2.32 0 0 0-2.318-2.318h-.726M21.5 20.91V3.09"
    />
  </Svg>
);
export default IconlystAlignRightBroken;
