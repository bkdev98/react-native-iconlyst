import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSliderBulk = ({
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
      fillRule="evenodd"
      d="M16.205 3.586H14.76a.5.5 0 0 0-.5.5v15.823c0 .277.223.5.5.5h1.444c2.816 0 4.709-1.974 4.709-4.913V8.508c0-2.944-1.893-4.922-4.709-4.922"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.366 2.25a.75.75 0 0 0-.75.75v.586H8.787c-2.812 0-4.7 1.978-4.7 4.922v6.988c0 2.939 1.888 4.913 4.7 4.913h1.83V21a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanSliderBulk;
