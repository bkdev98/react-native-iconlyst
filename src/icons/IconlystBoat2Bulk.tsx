import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.436 15.944a.5.5 0 0 0-.437-.257H3a.5.5 0 0 0-.459.697l1.622 3.788a2.25 2.25 0 0 0 2.078 1.375h10.772a2.29 2.29 0 0 0 1.923-1.067l2.49-4.03a.5.5 0 0 0 .011-.506"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M10.267 2.97a.498.498 0 0 0-.639.583c.834 3.833.662 7.136-.51 9.814a.5.5 0 0 0 .448.7l7.818.15h.01a.5.5 0 0 0 .498-.46c.631-8.094-7.543-10.76-7.625-10.787"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat2Bulk;
