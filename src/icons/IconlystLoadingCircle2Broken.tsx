import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle2Broken = ({
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
      d="M3.989 15.263A8.8 8.8 0 0 1 3.5 13.44M4.062 8.552a8.6 8.6 0 0 0-.546 1.966M6.741 4.934c-.44.364-.853.767-1.208 1.199M11.057 3.006a8.2 8.2 0 0 0-1.823.489M13.934 3.007q.81.127 1.58.4a9.063 9.063 0 0 1 5.445 11.601M5.443 17.701q.47.587 1.066 1.088a9 9 0 0 0 2.848 1.664 9.06 9.06 0 0 0 9.437-2.064"
    />
  </Svg>
);
export default IconlystLoadingCircle2Broken;
