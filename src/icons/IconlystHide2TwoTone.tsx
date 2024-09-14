import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide2TwoTone = ({
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
      d="M7.02 18.447c-2.101-1.362-3.521-3.394-3.521-5.475 0-3.628 4.328-7.099 9.005-7.099 1.984 0 3.909.622 5.465 1.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 15.135a3.03 3.03 0 0 1-.9-2.167 3.073 3.073 0 0 1 5.246-2.18M20.171 5.295l-15.34 15.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.52 13.514a3.07 3.07 0 0 1-2.466 2.472"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.237 9.568c.798 1.041 1.265 2.208 1.265 3.404 0 3.617-4.29 7.1-8.995 7.1a9.8 9.8 0 0 1-2.461-.313"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHide2TwoTone;
