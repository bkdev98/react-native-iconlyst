import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletTwoTone = ({
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
      d="M12.114 3v1.372m9 7.628h-1.372M4.486 12H3.114m15.364-6.364-.97.97m-10.787 0-.97-.97M16.324 12a4.195 4.195 0 1 0-8.391 0z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.376 16.043v3.155a1.802 1.802 0 0 1-3.605 0v-3.155M13.19 16.043l2.134 4.958 2.134-4.958"
    />
  </Svg>
);
export default IconlystUltravioletTwoTone;
