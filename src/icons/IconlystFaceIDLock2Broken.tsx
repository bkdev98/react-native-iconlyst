import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2Broken = ({
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
      d="M12.25 3.324h4.217c2.948 0 4.783 2.081 4.783 5.027v7.947c0 2.945-1.835 5.026-4.784 5.026H8.032c-2.948 0-4.782-2.08-4.782-5.026V8.351c0-2.946 1.843-5.027 4.782-5.027h.514"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.485 16.72a1.753 1.753 0 0 1-1.753-1.752v-1.983c0-.97.784-1.755 1.753-1.755h3.533c.968 0 1.753.785 1.753 1.755v1.983c0 .967-.785 1.753-1.753 1.753"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.36 11.267v-1.26A2.11 2.11 0 0 0 10.144 10v1.267"
    />
  </Svg>
);
export default IconlystFaceIDLock2Broken;
