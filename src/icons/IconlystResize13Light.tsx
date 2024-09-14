import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize13Light = ({
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
      d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.783v8.435C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.156 3 16.218M7.027 7.027l2.844 2.844M7.027 7.027l.005 2.614m-.005-2.614 2.613.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.027 16.973 2.844-2.844m-.231 2.84-2.613.005.005-2.613M16.973 16.977l-2.844-2.844m2.84.23.005 2.613-2.613-.005M16.975 7.027 14.13 9.871m2.844-2.844-2.613.006m2.613-.006-.006 2.614"
    />
  </Svg>
);
export default IconlystResize13Light;
