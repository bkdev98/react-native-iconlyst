import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController1Light = ({
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
      d="M7.886 6.942h8.227a4.88 4.88 0 0 1 4.882 4.882v4.294A4.883 4.883 0 0 1 16.113 21H7.886a4.88 4.88 0 0 1-4.882-4.882v-4.294a4.88 4.88 0 0 1 4.882-4.882M16.573 15.598h-.01M14.94 12.382h-.01M9.162 12.28v3.368m1.72-1.684H7.445M8.465 3c0 .666.551 1.206 1.23 1.206h.951c1.049.004 1.898.836 1.902 1.864v.737"
    />
  </Svg>
);
export default IconlystController1Light;
