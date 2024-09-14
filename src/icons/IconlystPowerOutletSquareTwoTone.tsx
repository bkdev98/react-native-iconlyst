import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletSquareTwoTone = ({
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
      d="M12 16.746a3.23 3.23 0 0 1-3.229-3.228v-2.015a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.23 3.23 0 0 1-3.229 3.228M10.316 10.863v-2m3.368 2v-2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.752V20a1.5 1.5 0 0 0 1.5 1.5h2.716c2.949 0 4.784-2.081 4.784-5.026V8.526C21 5.581 19.165 3.5 16.217 3.5H7.782C4.842 3.5 3 5.581 3 8.526v7.948C3 19.419 4.834 21.5 7.782 21.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutletSquareTwoTone;
