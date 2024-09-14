import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignBottomTwoTone = ({
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
      d="M3.59 21h17.82"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.738 17.364h2.066a2.32 2.32 0 0 0 2.318-2.318v-4.939a2.32 2.32 0 0 0-2.318-2.318h-2.066a2.32 2.32 0 0 0-2.318 2.318v4.94a2.32 2.32 0 0 0 2.318 2.317M6.195 17.363h2.066a2.32 2.32 0 0 0 2.318-2.318V5.318A2.32 2.32 0 0 0 8.261 3H6.195a2.32 2.32 0 0 0-2.318 2.318v9.727a2.32 2.32 0 0 0 2.318 2.318"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignBottomTwoTone;
