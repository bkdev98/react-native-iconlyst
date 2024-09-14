import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashlightBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.62 20.63a3.434 3.434 0 1 1-4.855-4.856l3.22-3.22c.432-.433.711-.992.798-1.595l.235-1.643A2.5 2.5 0 0 1 8.725 7.9l2.81-2.81M19.305 12.86l-2.81 2.809c-.383.383-.88.631-1.416.708l-1.642.235a2.8 2.8 0 0 0-1.595.797l-1.318 1.318M7.918 16.477 6.874 17.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.586 9.435c1.357 1.642 2.05 3.095 1.603 3.54-.569.57-2.77-.71-4.915-2.855s-3.424-4.346-2.856-4.915c.473-.472 2.074.332 3.834 1.85M7.646 11.496c.528.859 1.34 1.884 2.355 2.9q.246.246.492.475M21.307 8.727l-.08.065M19.717 4.664l-.08.066M15.682 3.102l-.08.065"
    />
  </Svg>
);
export default IconlystFlashlightBroken;
