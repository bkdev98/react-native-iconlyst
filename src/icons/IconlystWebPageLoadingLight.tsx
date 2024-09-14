import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLoadingLight = ({
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
      d="M20.811 12.796V7.897c0-2.87-1.787-4.897-4.659-4.897H7.934c-2.864 0-4.66 2.028-4.66 4.897v7.743c0 2.87 1.787 4.897 4.66 4.897h1.705"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.549 20.14a3.443 3.443 0 0 1-5.72-2.582M13.996 14.975a3.443 3.443 0 0 1 5.72 2.582M6.533 6.459h-.054m2.477 0h-.054m2.476 0h-.054M20.812 9.325H3.275"
    />
  </Svg>
);
export default IconlystWebPageLoadingLight;
