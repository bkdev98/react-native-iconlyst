import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappySunTwoTone = ({
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
      d="M12.055 3a2.94 2.94 0 0 0 4.5 1.206A2.94 2.94 0 0 0 19.849 7.5a2.94 2.94 0 0 0 1.206 4.5 2.94 2.94 0 0 0-1.206 4.5 2.94 2.94 0 0 0-3.294 3.294 2.94 2.94 0 0 0-4.5 1.206 2.94 2.94 0 0 0-4.5-1.206A2.94 2.94 0 0 0 4.26 16.5 2.94 2.94 0 0 0 3.055 12 2.94 2.94 0 0 0 4.26 7.5a2.94 2.94 0 0 0 3.295-3.294A2.94 2.94 0 0 0 12.055 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.316 13.59c.665 1.035 3.377 2.426 5.455 0M15.978 10.313a1.25 1.25 0 1 0-2.5 0M10.632 10.313a1.25 1.25 0 1 0-2.5 0"
    />
  </Svg>
);
export default IconlystHappySunTwoTone;
