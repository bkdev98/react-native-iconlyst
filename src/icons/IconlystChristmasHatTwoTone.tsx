import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasHatTwoTone = ({
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
      d="M11.324 9.516c.648 1.474 2.417 4.736 4.315 5.987"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.874 13.037-.825-3.467c-.413-1.816-2.49-5.232-7.49-4.369s-5.94 6.652-5.786 9.439c2.474.9 7.858.71 9.505 0"
    />
    <Circle
      cx={18.795}
      cy={16.196}
      r={2.705}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.829 12.637C2.945 13.12 2.5 14.134 2.5 16.196c0 3.466 1.887 3.97 8.497 3.97 3.84 0 6.024-.355 7.21-1.259"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasHatTwoTone;
