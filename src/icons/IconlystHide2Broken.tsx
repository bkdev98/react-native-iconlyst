import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide2Broken = ({
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
      d="M6.77 17.488c-2.101-1.362-3.521-3.394-3.521-5.475 0-3.628 4.328-7.099 9.005-7.099.725 0 1.441.083 2.135.237"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.075 14.176a3.03 3.03 0 0 1-.9-2.167 3.073 3.073 0 0 1 5.246-2.18M19.921 4.336l-15.34 15.34M15.27 12.555a3.07 3.07 0 0 1-2.466 2.472"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.987 8.61c.798 1.04 1.265 2.207 1.265 3.403 0 3.617-4.29 7.1-8.995 7.1a9.8 9.8 0 0 1-2.461-.313"
    />
  </Svg>
);
export default IconlystHide2Broken;
