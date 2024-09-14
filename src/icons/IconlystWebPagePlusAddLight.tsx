import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPagePlusAddLight = ({
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
      d="M20.995 13.002V8C20.995 5.07 19.17 3 16.238 3H7.847C4.923 3 3.09 5.07 3.09 8v7.905c0 2.93 1.824 5 4.757 5h1.74M16.941 15.234V21M19.822 18.117h-5.765M6.417 6.531H6.36m2.528 0h-.055m2.528 0h-.056M20.995 9.458H3.09"
    />
  </Svg>
);
export default IconlystWebPagePlusAddLight;
