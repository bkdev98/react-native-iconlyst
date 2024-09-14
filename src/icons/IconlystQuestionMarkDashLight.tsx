import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkDashLight = ({
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
      d="M13.98 21h-3.962M13.98 3h-3.962M3 13.982V10.02M21 13.982V10.02M11.736 16.537v.044M11.735 13.895c-.013-.965.865-1.375 1.517-1.746.796-.44 1.335-1.138 1.335-2.107A2.585 2.585 0 0 0 12 7.454a2.58 2.58 0 0 0-2.588 2.588M3.027 16.914c.313 2.233 1.795 3.803 4.047 4.066M16.89 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.027 7.095C3.34 4.862 4.822 3.283 7.074 3.02M16.89 3.02c2.253.263 3.725 1.842 4.037 4.075"
    />
  </Svg>
);
export default IconlystQuestionMarkDashLight;
