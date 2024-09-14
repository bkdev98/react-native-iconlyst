import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.456 13.76V5.926a2.367 2.367 0 0 1 2.367-2.367h6.337a2.37 2.37 0 0 1 2.367 2.358l.009 7.843M9.781 6.727h4.629M9.78 9.874h2.233"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.464 5.713C4.354 6.186 3 8.154 3 10.5v6.048c0 2.706 1.798 4.902 4.477 4.893h.542M17.518 5.713C19.638 6.186 21 8.154 21 10.5v6.048c0 2.706-1.806 4.902-4.485 4.893h-4.519M11.815 13.76H5.523M18.47 13.76h-3.777"
    />
  </Svg>
);
export default IconlystEmailDocument1Broken;
