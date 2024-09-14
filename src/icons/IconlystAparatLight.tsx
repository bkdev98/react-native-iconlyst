import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAparatLight = ({
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
      d="M13.751 5.467a6.764 6.764 0 1 1-3.501 13.067A6.764 6.764 0 0 1 13.75 5.467"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.911 13.78a1.082 1.082 0 1 1-.56 2.09 1.082 1.082 0 0 1 .56-2.09M9.456 12.584a1.082 1.082 0 1 1-.56 2.09 1.082 1.082 0 0 1 .56-2.09M15.105 9.326a1.082 1.082 0 1 1-.561 2.09 1.082 1.082 0 0 1 .56-2.09M10.65 8.13a1.082 1.082 0 1 1-.561 2.091 1.082 1.082 0 0 1 .56-2.09M18.322 18.852a2.9 2.9 0 0 1-3.549 2.049M3.1 14.773a2.896 2.896 0 0 0 2.049 3.549M20.9 9.228a2.896 2.896 0 0 0-2.048-3.548M5.678 5.148A2.9 2.9 0 0 1 9.226 3.1"
    />
  </Svg>
);
export default IconlystAparatLight;
