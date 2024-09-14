import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettingsBroken = ({
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
      d="M19.063 10.445a1.79 1.79 0 0 0 .655-2.434v-.006l-.582-1.011a1.79 1.79 0 0 0-2.442-.656 1.78 1.78 0 0 1-2.438-.623l-.005-.01a1.7 1.7 0 0 1-.24-.857A1.79 1.79 0 0 0 12.278 3L12.221 3h-1.174a1.78 1.78 0 0 0-1.78 1.779v.012a1.79 1.79 0 0 1-1.793 1.766 1.7 1.7 0 0 1-.857-.24 1.79 1.79 0 0 0-2.443.656l-.625 1.03a1.79 1.79 0 0 0 .656 2.442M4.204 13.547a1.78 1.78 0 0 0-.659 2.427l.003.007.592 1.02a1.79 1.79 0 0 0 2.446.697 1.774 1.774 0 0 1 2.426.64q.002.008.007.014c.154.26.237.556.24.857 0 .99.802 1.79 1.79 1.79h.832M17.119 13.844a3.015 3.015 0 1 1-2.227.983M19.172 19.067l1.518 1.515"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.835 14.32A2.45 2.45 0 0 1 9.168 12a2.47 2.47 0 0 1 2.472-2.472c1.076 0 1.994.693 2.322 1.666"
    />
  </Svg>
);
export default IconlystSearchSettingsBroken;
