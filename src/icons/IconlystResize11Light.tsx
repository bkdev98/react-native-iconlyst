import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize11Light = ({
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
      d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.783v8.435C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.156 3 16.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.871 9.871 7.027 7.027m2.838.232.006 2.613-2.614-.006M9.87 14.129l-2.845 2.844m2.844-2.844-2.612.005m2.612-.005-.004 2.613M14.128 14.133l2.844 2.844m-2.84-.231-.005-2.613 2.613.005M14.129 9.871l2.844-2.844m-.23 2.84-2.613.005.005-2.613"
    />
  </Svg>
);
export default IconlystResize11Light;
