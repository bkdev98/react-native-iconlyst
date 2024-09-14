import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRefreshBroken = ({
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
      d="M19.735 12.774a8.163 8.163 0 0 1-15.023 3.247M3.482 11.71a8.16 8.16 0 0 1 7.146-8.097M17.197 17.688 20.518 21M19.212 8.333a3.048 3.048 0 0 1-5.063-2.286M15.184 3.762a3.048 3.048 0 0 1 5.063 2.286"
    />
  </Svg>
);
export default IconlystSearchRefreshBroken;
