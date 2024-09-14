import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShareBroken = ({
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
      d="m8.324 20.543-1.38-1.381 1.38-1.38M15.678 20.543l1.38-1.381-1.38-1.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.771 13.918v3.472c0 .98-.794 1.773-1.774 1.773H6.943M13.23 13.918v3.472c0 .98.794 1.773 1.774 1.773h2.054M12 3.457c-3.617 0-4.897 3.265-4.897 4.898C4.833 8.375 3 9.9 3 12.496c0 1.68 1 3.125 2.436 3.774M18.563 16.27A4.14 4.14 0 0 0 21 12.496c0-2.596-1.83-4.14-4.103-4.141 0-1.07-.55-2.84-1.945-3.933"
    />
  </Svg>
);
export default IconlystCloudShareBroken;
