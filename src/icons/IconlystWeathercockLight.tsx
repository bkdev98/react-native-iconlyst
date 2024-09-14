import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeathercockLight = ({
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
      d="M6.962 15.398V21M8.082 11.235c.125-2.242-.693-4.11-1.827-4.174-1.134-.063-2.155 1.704-2.28 3.946-.124 2.242.694 4.11 1.828 4.174 1.134.063 2.154-1.703 2.28-3.946M10.775 6.994c1.254.07 2.177 1.823 2.06 3.916-.103 1.863-.996 3.367-2.075 3.626M16.029 8.452c.664.308 1.112 1.354 1.044 2.569-.074 1.336-.747 2.4-1.535 2.483"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.755 15.185c.606.124 2.773.076 6.598-1.105 2.448-.756 4.397-.672 5.7-.361.804.192 1.796-.197 2.027-.991.278-.955-.352-1.613-.993-2.217-2.099-1.981-6.302-4.232-12.732-3.468M6.962 4.946V6.89"
    />
    <Circle
      cx={6.962}
      cy={3.973}
      r={0.973}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.727 18.699a3.49 3.49 0 0 0-3.6 0"
    />
  </Svg>
);
export default IconlystWeathercockLight;
