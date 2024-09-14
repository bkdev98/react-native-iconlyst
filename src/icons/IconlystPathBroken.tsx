import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathBroken = ({
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
      d="M3.185 18.5A2.5 2.5 0 1 1 5.684 21M5.684 3a2.5 2.5 0 1 1-2.5 2.5M21.181 5.5A2.5 2.5 0 1 1 18.682 3M18.683 20.999a2.5 2.5 0 1 1 2.5-2.5M18.682 11v2M5.684 11v2m7.498 5.498h-2m2-12.998h-2"
    />
  </Svg>
);
export default IconlystPathBroken;
