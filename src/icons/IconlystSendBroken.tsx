import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendBroken = ({
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
      d="m19.803 8.503 1.143-3.861c.287-.97-.609-1.872-1.575-1.59L3.916 7.58c-1.055.308-1.25 1.725-.317 2.309l3.255 2.035M15.832 8.175l-5.723 5.784m-.003.001 3.967 6.435c.578.937 1.987.748 2.3-.308l2.286-7.723"
    />
  </Svg>
);
export default IconlystSendBroken;
