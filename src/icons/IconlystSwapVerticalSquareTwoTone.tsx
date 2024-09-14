import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalSquareTwoTone = ({
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
      d="M21.5 7.97v8.434c0 2.948-2.081 4.784-5.026 4.784H8.526c-2.945 0-5.026-1.835-5.026-4.785V7.97c0-2.948 2.081-4.782 5.026-4.782h7.948c2.945 0 5.026 1.842 5.026 4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.994 10.544 2.419-1.751v6.79M17.007 13.832l-2.42 1.751v-6.79"
    />
  </Svg>
);
export default IconlystSwapVerticalSquareTwoTone;
