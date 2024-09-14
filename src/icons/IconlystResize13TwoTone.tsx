import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize13TwoTone = ({
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
      d="M3.5 16.468V8.033c0-2.948 2.081-4.783 5.026-4.783h7.948c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.526c-2.945 0-5.026-1.844-5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.528 7.277 2.844 2.844M7.528 7.277l.005 2.614m-.005-2.614 2.613.006M7.527 17.223l2.844-2.844m-.231 2.84-2.613.005.005-2.613M17.473 17.227l-2.844-2.844m2.84.23.005 2.613-2.613-.005M17.475 7.277l-2.844 2.844m2.844-2.844-2.613.006m2.613-.006-.006 2.614"
    />
  </Svg>
);
export default IconlystResize13TwoTone;
