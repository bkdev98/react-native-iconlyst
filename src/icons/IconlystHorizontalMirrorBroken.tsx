import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalMirrorBroken = ({
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
      d="M14.724 20.996a.688.688 0 0 0 .537-1.118l-2.724-3.396a.687.687 0 0 0-1.073 0L8.74 19.878a.688.688 0 0 0 .537 1.118h2.724M9.277 3.004a.688.688 0 0 0-.537 1.118l2.724 3.396a.687.687 0 0 0 1.073 0l2.724-3.396a.688.688 0 0 0-.537-1.118h-2.349M8.334 11.998h2m3.333 0h2m3.333 0h2m-18 0h2"
    />
  </Svg>
);
export default IconlystHorizontalMirrorBroken;
