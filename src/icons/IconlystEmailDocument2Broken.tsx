import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument2Broken = ({
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
      d="m18.473 10.77-5.452 3.49a1.89 1.89 0 0 1-2.043 0l-5.451-3.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.46 11.337V5.426a2.367 2.367 0 0 1 2.368-2.367h3.169M15.165 3.059a2.37 2.37 0 0 1 2.367 2.358l.009 5.92M9.64 6.477h4.723m-3.487 3.175h2.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.518 5.213C19.638 5.686 21 7.654 21 10v6.048c0 2.706-1.807 4.902-4.485 4.893h-4.52M6.464 5.213C4.354 5.686 3 7.654 3 10v6.048c0 2.706 1.798 4.902 4.477 4.893h.821"
    />
  </Svg>
);
export default IconlystEmailDocument2Broken;
