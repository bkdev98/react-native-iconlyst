import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.959h8.435C19.165 3.959 21 6.04 21 8.985v7.948c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.959 3 19.878 3 16.933V8.985C3 6.04 4.843 3.959 7.782 3.959"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.33 14.64v-1.76a2.328 2.328 0 1 0-4.656 0v2.798a2.33 2.33 0 0 0 2.328 2.328M12 15.388v-2.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.958 15.496v-2.628a4.956 4.956 0 0 0-6.866-4.575M7.967 9.959a5.07 5.07 0 0 0-.93 2.935v3.633"
    />
  </Svg>
);
export default IconlystTouchIdSquareLight;
