import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveBroken = ({
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
      d="m8.191 6.847 1.399-2.35a1.74 1.74 0 0 1 1.498-.852l3.322-.002a1.74 1.74 0 0 1 1.5.852l5.595 9.401c.326.55.326 1.235 0 1.785l-2.275 3.823c-.315.529-.885.853-1.5.853H7.775a1.75 1.75 0 0 1-1.5-.852l-2.28-3.823a1.75 1.75 0 0 1 0-1.787L6.393 9.87M9.83 14.686h8.696M7.075 20.037l5.739-11.139M14.445 12.06l-4.18-8.097"
    />
  </Svg>
);
export default IconlystGoogleDriveBroken;
