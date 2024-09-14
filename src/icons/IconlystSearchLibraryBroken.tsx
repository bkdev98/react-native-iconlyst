import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLibraryBroken = ({
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
      d="M3.25 19.148h7.118M3.25 14.383h4.432M11.028 4.852H21.25m-17.999 0h3.279M3.25 9.617h7.011M16.54 10.412a3.831 3.831 0 1 1-2.708 1.122M19.148 17.05l2.1 2.098"
    />
  </Svg>
);
export default IconlystSearchLibraryBroken;
