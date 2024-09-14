import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerChargeBroken = ({
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
      d="M7.89 3C5.05 3 3.042 4.77 3.042 7.614v8.136c0 2.845 2.008 4.616 4.85 4.616h2.483M20.407 10.119V7.614c0-2.836-2.008-4.614-4.85-4.614h-3.833M16.695 12.473a4.263 4.263 0 1 1 0 8.527 4.264 4.264 0 0 1-2.684-7.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.996 18.352.848-1.555h-2.295l.911-1.678M10.058 11.682H3.063M7.252 15.672h.504M7.252 7.691h.504m4.067 0h4.375"
    />
  </Svg>
);
export default IconlystServerChargeBroken;
