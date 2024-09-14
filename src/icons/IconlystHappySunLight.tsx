import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappySunLight = ({
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
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.937 15.02c.513.8 2.608 1.874 4.214 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.1 10.813a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0M16.37 10.813a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.099 10.793c.452-.54 1.318-.468 1.91 0M16.383 10.814h3.253M4.486 10.814H7.74"
    />
  </Svg>
);
export default IconlystHappySunLight;
