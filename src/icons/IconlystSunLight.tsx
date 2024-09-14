import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunLight = ({
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
      d="M12.055 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.055 3a2.94 2.94 0 0 0 4.5 1.206A2.94 2.94 0 0 0 19.849 7.5a2.94 2.94 0 0 0 1.206 4.5 2.94 2.94 0 0 0-1.206 4.5 2.94 2.94 0 0 0-3.294 3.294 2.94 2.94 0 0 0-4.5 1.206 2.94 2.94 0 0 0-4.5-1.206A2.94 2.94 0 0 0 4.26 16.5 2.94 2.94 0 0 0 3.055 12 2.94 2.94 0 0 0 4.26 7.5a2.94 2.94 0 0 0 3.295-3.294A2.94 2.94 0 0 0 12.055 3"
    />
  </Svg>
);
export default IconlystSunLight;
