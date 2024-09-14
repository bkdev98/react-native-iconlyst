import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicBroken = ({
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
      d="m16.555 9.163.22-4a1.184 1.184 0 0 0-1.869-1.027l-3.314 2.306a1.2 1.2 0 0 1-1.105.142l-3.74-1.39a1.212 1.212 0 0 0-1.573 1.468l1.127 3.83c.11.377.028.786-.22 1.092l-2.53 3.148a1.183 1.183 0 0 0 .895 1.934l4.01.056c.39.005.755.204.97.533l2.172 3.334a1.201 1.201 0 0 0 2.131-.276l1.35-3.792a1.22 1.22 0 0 1 .818-.764l3.873-1.082a1.201 1.201 0 0 0 .424-2.107l-1.587-1.2M18.184 19.198l2.535 2.718"
    />
  </Svg>
);
export default IconlystStarMagicBroken;
