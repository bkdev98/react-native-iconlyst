import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSliderBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.867 2.25a.75.75 0 0 0-.75.75v.586h-1.83c-2.811 0-4.7 1.978-4.7 4.922v6.988c0 2.939 1.889 4.913 4.7 4.913h1.83V21a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75M15.704 3.586H14.26a.5.5 0 0 0-.5.5V19.91c0 .277.223.5.5.5h1.445c2.816 0 4.708-1.974 4.708-4.913V8.508c0-2.944-1.892-4.922-4.708-4.922"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanSliderBold;
