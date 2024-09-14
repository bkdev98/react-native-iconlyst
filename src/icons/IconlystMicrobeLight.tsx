import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrobeLight = ({
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
      d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0M11.31 13.814l-.707-.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.432 16.621a2.013 2.013 0 0 1-2.735.79M17.15 14.688l-.546.84M13.432 5.805l.547.841M17.01 10.578a1.652 1.652 0 1 0-3.304 0 1.652 1.652 0 0 0 3.303 0M9.019 9.41a2.01 2.01 0 0 1 1.278-2.543M6.938 11.84c.786.786.786 2.06 0 2.847"
    />
  </Svg>
);
export default IconlystMicrobeLight;
