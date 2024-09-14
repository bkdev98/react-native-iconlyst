import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaturnTwoTone = ({
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
      d="M19.413 11.999A7.03 7.03 0 1 1 5.352 12 7.03 7.03 0 0 1 19.412 12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.488 6.403c2.217-.603 3.878-.55 4.367.299.883 1.528-2.366 5.056-7.257 7.88s-9.571 3.874-10.453 2.346c-.491-.849.293-2.313 1.924-3.932"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSaturnTwoTone;
