import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRefreshLight = ({
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
      d="M5.665 18.115a8.761 8.761 0 0 1 7.853-14.71M18.335 6.012a8.762 8.762 0 0 1-7.853 14.709"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.806 9.258h-2.609a1.404 1.404 0 0 0 0 2.81h1.606a1.405 1.405 0 0 1 0 2.81h-2.61M3 17.904l2.682.533.53-2.668M21 6.22l-2.683-.532-.53 2.667M12 14.875v1.18m0-7.985v1.19"
    />
  </Svg>
);
export default IconlystDollarRefreshLight;
