import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle2Light = ({
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
      d="M3.489 15.263A8.8 8.8 0 0 1 3 13.44M3.562 8.552a8.6 8.6 0 0 0-.546 1.966M6.241 4.934c-.44.364-.853.767-1.208 1.199M10.557 3.006a8.2 8.2 0 0 0-1.823.489M13.433 3.007q.81.127 1.582.4a9.063 9.063 0 1 1-9.006 15.382A7.6 7.6 0 0 1 4.943 17.7"
    />
  </Svg>
);
export default IconlystLoadingCircle2Light;
