import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber4Light = ({
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
      d="M15.415 3.46a1.8 1.8 0 0 1 1.282 1.723v9.32h.753a1.8 1.8 0 0 1 0 3.6h-.753v1.48a1.8 1.8 0 1 1-3.6 0v-1.48H7.55a1.8 1.8 0 0 1-1.502-2.792l7.348-11.12a1.8 1.8 0 0 1 2.02-.732"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.897 14.503h2.2v-3.331z"
    />
  </Svg>
);
export default IconlystNumber4Light;
