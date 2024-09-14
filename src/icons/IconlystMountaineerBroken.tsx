import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMountaineerBroken = ({
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
      d="M8.779 17.254 7.113 21M11.023 3c1.075 0 1.955.875 1.955 1.955s-.88 1.953-1.955 1.953a1.956 1.956 0 0 1-1.955-1.953M16.885 9.762c-.841.42-1.654 1.068-2.65 1.01-1.1-.066-2.145-.847-3.276-.54-1.008.273-1.61 1.119-1.666 2.13-.056 1.02.48 1.702 1.135 2.324.633.603 1.377 1.15 1.802 1.9.74 1.308.725 2.972.755 4.41M16.885 8.297v5.28M16.885 16.387V21"
    />
  </Svg>
);
export default IconlystMountaineerBroken;
