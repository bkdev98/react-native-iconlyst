import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsBroken = ({
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
      d="M10.708 17.836h8.727M10.708 12h2.182M15.713 12h3.722M10.708 6.184h8.727M5.65 16.734a1.085 1.085 0 1 0 .91 1.676M5.65 10.914a1.085 1.085 0 1 1-.981 1.55M5.65 7.267a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17"
    />
  </Svg>
);
export default IconlystSortsBroken;
