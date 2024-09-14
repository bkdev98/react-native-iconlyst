import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.496 20.1c-1.534 0-2.493-1.66-1.726-2.988M19.504 20.1c1.529 0 2.489-1.652 1.732-2.98m-6.96-12.215c-.762-1.338-2.689-1.343-3.458-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.496 20.1h14.008m1.732-2.98-6.96-12.215m-3.458-.009L3.77 17.111"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTriangleTwoTone;
