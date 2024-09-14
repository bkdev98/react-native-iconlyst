import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRefreshBroken = ({
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
      d="M5.665 18.115a8.76 8.76 0 0 1-1.823-9.369M5.748 5.86a8.75 8.75 0 0 1 7.77-2.453M18.335 6.012a8.77 8.77 0 0 1 1.591 9.893M18.252 18.27a8.75 8.75 0 0 1-7.77 2.451M13.806 9.258h-2.609a1.404 1.404 0 0 0 0 2.81h1.606a1.405 1.405 0 0 1 0 2.81h-2.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 17.906 2.682.533.53-2.668M21 6.22l-2.683-.532-.53 2.667M12 14.875v1.18m0-7.985v1.19"
    />
  </Svg>
);
export default IconlystDollarRefreshBroken;
