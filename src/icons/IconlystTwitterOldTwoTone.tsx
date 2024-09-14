import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterOldTwoTone = ({
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
      d="M5.396 5.443v8.717a6.84 6.84 0 0 0 6.84 6.84h3.925a2.443 2.443 0 1 0 0-4.886h-3.925a1.954 1.954 0 0 1-1.955-1.954"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.396 5.443a2.443 2.443 0 0 1 4.885 0V7.32h5.88a2.443 2.443 0 1 1 0 4.886h-5.88v1.954"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTwitterOldTwoTone;
