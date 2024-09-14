import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading2Broken = ({
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
      d="m5.168 5.883-.005.009m-1.908 3.87-.006.01m.233 4.267-.006.009m2.334 3.54-.006.009M8.74 3.447l-.006.01M8.51 19.286a8.424 8.424 0 0 0 11.402-6.966M11.547 3a8.43 8.43 0 0 1 7.88 5.471M17.33 17.585 20.753 21"
    />
  </Svg>
);
export default IconlystSearchLoading2Broken;
