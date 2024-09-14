import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarLight = ({
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
      d="M10.984 10.265v-4.8M15.61 16.567h-4.885M4.543 10.32h15.459a2.26 2.26 0 0 1 2.248 2.248v1.74a2.25 2.25 0 0 1-2.248 2.248h-.346"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.671 16.556a2.26 2.26 0 0 1-2.259-2.249V7.66a2.26 2.26 0 0 1 2.26-2.249h7.945a1.22 1.22 0 0 1 1.08.649l2.282 4.227M11.59 12.892h1.113M2.25 9.26v3.545"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.705 18.589a2.021 2.021 0 1 0 0-4.043 2.021 2.021 0 0 0 0 4.043M17.635 18.589a2.021 2.021 0 1 0 0-4.043 2.021 2.021 0 0 0 0 4.043"
    />
  </Svg>
);
export default IconlystCarLight;
