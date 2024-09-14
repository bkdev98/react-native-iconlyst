import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire1Broken = ({
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
      d="M19.055 8.85C17.78 6.197 15.615 4.336 13.056 3c.391 3-.37 8.081-3.212 8.081C9.972 9.637 9.589 8.277 8.71 7c-.337.241-1.144.99-1.436 1.278-5.482 5.223-.614 14.13 6.682 12.533 4.393-.725 6.535-4.81 6.056-8.819"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.393 16.888c.046-.549.198-1.099.46-1.608.592-1.232 2.787-2.717 2.787-2.717s-.514 2.816.757 4.325c.26.309 1.333-1.27 1.815-1.799 2.645 2.503.215 6.051-2.572 5.901"
    />
  </Svg>
);
export default IconlystFire1Broken;
