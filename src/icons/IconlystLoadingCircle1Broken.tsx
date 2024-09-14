import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle1Broken = ({
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
      d="M5.276 6.631A9 9 0 0 1 6.728 5.08M3.827 9.546a9 9 0 0 0-.299 3.034M7.352 19.361a9 9 0 0 1-3.12-3.782M18.063 19.086a9 9 0 0 1-7.522 1.695M20.927 8.85a9.01 9.01 0 0 0-8.786-5.843M20.145 16.724a8.9 8.9 0 0 0 1.345-5.06"
    />
  </Svg>
);
export default IconlystLoadingCircle1Broken;
