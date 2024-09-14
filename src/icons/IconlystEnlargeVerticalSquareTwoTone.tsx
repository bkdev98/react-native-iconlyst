import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalSquareTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 21.25h8.435c2.948 0 4.783-2.081 4.783-5.026V8.276c0-2.945-1.835-5.026-4.784-5.026H8.282C5.334 3.25 3.5 5.331 3.5 8.276v7.948c0 2.945 1.843 5.026 4.782 5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.264 12.25H7.74M10.356 15.395 12.5 17.54l2.145-2.145M10.356 9.106 12.5 6.961l2.145 2.145"
    />
  </Svg>
);
export default IconlystEnlargeVerticalSquareTwoTone;
