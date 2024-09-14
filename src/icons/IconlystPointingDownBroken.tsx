import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingDownBroken = ({
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
      d="M17.48 4.65c1.67 1.677 2.61 5.095 1.66 7.679-.95 2.566-4.36 2.445-6.71 2.669l-.07 4.348A1.677 1.677 0 0 1 10.68 21 1.68 1.68 0 0 1 9 19.32V9.68l-1.2 1.745c-.48.699-1.38.977-2.17.673-.9-.343-1.37-1.315-1.05-2.216.61-1.68 1.58-3.555 2.82-5.1 1.27-1.576 4.22-2.064 6.72-1.631"
    />
  </Svg>
);
export default IconlystPointingDownBroken;
