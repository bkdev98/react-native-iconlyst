import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCupBroken = ({
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
      d="M13.263 10.667h-2.207l1.762-1.799c.354-.414.46-.74.46-1.076 0-.668-.566-1.214-1.273-1.214-.715 0-1.282.546-1.282 1.214M6.054 5.652h-3.03s-.427 3.799 2.378 5.645M17.945 5.652h3.031s.426 3.799-2.379 5.645"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 3.89H5.95s.006 10.747 6.052 10.747c6.048 0 6.048-10.746 6.048-10.746h-3.025M8.016 20.109l.887-2.773h6.336l.888 2.773M12.071 20.11H6.398M17.744 20.11h-2.837M11.996 14.637v2.697"
    />
  </Svg>
);
export default IconlystCupBroken;
