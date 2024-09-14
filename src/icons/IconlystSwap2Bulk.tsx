import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap2Bulk = ({
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
      fill={props.color}
      d="M14.712 8.293a1 1 0 1 0-1.414 1.414L14.59 11H6.505a1 1 0 1 0 0 2h8.086l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3 .006-.007a.997.997 0 0 0-.004-1.405M14.712 8.293l3 3Z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.497 5.677a7 7 0 1 1 0 12.646 7.06 7.06 0 0 1-6.496-.257A7.05 7.05 0 0 1 2.495 12a7.05 7.05 0 0 1 3.506-6.066 7.06 7.06 0 0 1 6.496-.257m.6 1.94a5 5 0 1 1-.002 8.765 1 1 0 0 0-.181-.105A5 5 0 0 1 10.504 12c0-1.812.965-3.399 2.408-4.276a1 1 0 0 0 .185-.107m-2.598-.51a5.05 5.05 0 0 0-3.5.56A5.05 5.05 0 0 0 4.496 12 5.05 5.05 0 0 0 7 16.333c1.06.61 2.318.797 3.499.56A6.98 6.98 0 0 1 8.505 12c0-1.904.76-3.63 1.994-4.893"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwap2Bulk;
