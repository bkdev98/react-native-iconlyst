import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenBroken = ({
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
      d="M12.315 3H7.783c-2.937 0-4.78 2.081-4.78 5.026v7.947c0 2.946 1.835 5.027 4.78 5.027M20.996 11.436v4.537c0 2.945-1.83 5.027-4.779 5.027H12M11.459 13.345l8.851-9.638"
    />
  </Svg>
);
export default IconlystPenBroken;
