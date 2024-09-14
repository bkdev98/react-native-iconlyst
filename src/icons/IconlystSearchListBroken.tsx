import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchListBroken = ({
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
      d="M18.66 11.282a4.067 4.067 0 1 0-5.751 5.752 4.067 4.067 0 0 0 6.93-2.55M18.661 17.035l2.204 2.204M3.25 4.762h9m9 0h-5.127M3.25 11.512h4.5m-4.5 6.75h4.5"
    />
  </Svg>
);
export default IconlystSearchListBroken;
