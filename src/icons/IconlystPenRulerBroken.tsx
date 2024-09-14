import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenRulerBroken = ({
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
      d="M20.786 11.58V6.557a3.055 3.055 0 0 0-6.11 0v10.049a5.81 5.81 0 0 0 2.157 4.517 1.43 1.43 0 0 0 1.796 0 5.81 5.81 0 0 0 2.157-4.517v-1.412M14.693 8.828h3.86M11.557 9.5V6.364A2.864 2.864 0 0 0 8.693 3.5h-2.26a2.865 2.865 0 0 0-2.865 2.865v12.27A2.864 2.864 0 0 0 6.433 21.5h2.26a2.864 2.864 0 0 0 2.864-2.864v-6.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.568 7.104h3.376M3.568 17.9h2.476M3.568 14.258l3.376.043M3.568 10.703h1.576"
    />
  </Svg>
);
export default IconlystPenRulerBroken;
