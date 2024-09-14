import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquareBroken = ({
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
      d="M12.249 21H8.032c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.25 5.081 5.093 3 8.032 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.702"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.58 13.68v-1.758a2.328 2.328 0 1 0-4.656 0v2.797a2.33 2.33 0 0 0 2.328 2.328M12.25 14.429v-2.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.208 14.537V11.91a4.956 4.956 0 0 0-6.866-4.575M8.217 9a5.07 5.07 0 0 0-.93 2.935v3.633"
    />
  </Svg>
);
export default IconlystTouchIdSquareBroken;
