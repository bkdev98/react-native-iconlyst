import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoconutsLight = ({
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
      d="M19.128 9.893a6.537 6.537 0 0 1-9.245 9.245"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.026 9.793c1.26 1.26.213 4.351-2.34 6.904s-5.644 3.6-6.904 2.34-.213-4.352 2.34-6.904c2.553-2.553 5.644-3.6 6.904-2.34M8.825 6.299v.01M11.54 7.129v.01M9.46 9.252v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.46 15.954a6.503 6.503 0 1 1 6.503-6.503"
    />
  </Svg>
);
export default IconlystCoconutsLight;
