import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger5Broken = ({
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
      d="M9.828 5.892a2.198 2.198 0 0 1 2.793-2.114 2.16 2.16 0 0 1 1.507 1.485 2.2 2.2 0 0 1-1.305 2.672 1.24 1.24 0 0 0-.804 1.146l-.002.486 7.568 3.132a2.29 2.29 0 0 1-.876 4.408h-5.1M9.699 10.377 4.397 12.62A2.29 2.29 0 0 0 3 14.73v.086a2.29 2.29 0 0 0 2.29 2.291h5.39M7.854 19.065c0 .683.553 1.237 1.236 1.237h5.818c.683 0 1.236-.554 1.236-1.237v-1.86"
    />
  </Svg>
);
export default IconlystCoatHanger5Broken;
