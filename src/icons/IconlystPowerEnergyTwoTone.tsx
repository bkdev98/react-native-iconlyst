import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerEnergyTwoTone = ({
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
      d="M7.45 10.54a4.55 4.55 0 0 0 4.995 4.527c2.365-.225 4.103-2.347 4.103-4.723V7.127a1.01 1.01 0 0 0-1.01-1.01h-7.08a1.01 1.01 0 0 0-1.009 1.01z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 21.138v-5.904M9.71 3.137v2.979m4.577-2.98v2.98M11.99 11.293l1.512-2.587h-3.007l1.511-2.589"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.71 9.457h1.417M4.543 9.457H3.127M19.097 4.723l1.226-.709M5.157 4.723l-1.226-.709M19.097 14.195l1.226.708M5.157 14.195l-1.226.708"
    />
  </Svg>
);
export default IconlystPowerEnergyTwoTone;
