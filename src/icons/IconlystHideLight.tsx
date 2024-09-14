import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideLight = ({
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
      d="M6.794 18.163a13.1 13.1 0 0 1-3.795-5.194 13.24 13.24 0 0 1 3.828-5.218A8.3 8.3 0 0 1 12 5.865a8.33 8.33 0 0 1 5.193 1.905M19.677 5.295l-15.35 15.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.82 15.138a3.04 3.04 0 0 1-.9-2.17 3.075 3.075 0 0 1 5.25-2.18M19.25 9.904c.702.948 1.29 1.975 1.751 3.061-1.914 4.434-5.296 7.104-9 7.104a7.8 7.8 0 0 1-2.463-.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.023 13.514a3.08 3.08 0 0 1-2.47 2.474"
    />
  </Svg>
);
export default IconlystHideLight;
