import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageEditBroken = ({
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
      d="m3.006 15.573 3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.693 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.475c-.84-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316M7.778 20.995C4.833 20.995 3 18.918 3 15.974V8.027c0-2.944 1.843-5.021 4.778-5.021h5.509"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.953v5.022c0 2.945-1.844 5.022-4.788 5.022h-4.926M20.763 5.562a1.1 1.1 0 0 0-.058-1.554l-.687-.637a1.1 1.1 0 0 0-1.554.058l-3.439 3.706a2 2 0 0 0-.533 1.304l-.02.714a.8.8 0 0 0 .882.818l.71-.073a2 2 0 0 0 1.26-.63l1.4-1.508"
    />
  </Svg>
);
export default IconlystImageEditBroken;
