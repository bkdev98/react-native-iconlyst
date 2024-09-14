import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading2Light = ({
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
      d="m5.168 5.883-.005.009m-1.908 3.87-.006.01m.233 4.267-.006.009m2.334 3.54-.006.009M8.74 3.447l-.006.01M11.547 3A8.423 8.423 0 1 1 8.51 19.286M17.33 17.585 20.753 21"
    />
  </Svg>
);
export default IconlystSearchLoading2Light;
