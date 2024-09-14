import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLoadingTwoTone = ({
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
      d="M21.311 12.796V7.897c0-2.87-1.787-4.897-4.659-4.897H8.434c-2.864 0-4.66 2.028-4.66 4.897v7.743c0 2.87 1.787 4.897 4.66 4.897h1.705"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.049 20.14a3.443 3.443 0 0 1-5.72-2.582"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.496 14.975a3.443 3.443 0 0 1 5.72 2.582"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.033 6.459h-.054m2.477 0h-.054m2.476 0h-.054M21.312 9.325H3.775"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageLoadingTwoTone;
