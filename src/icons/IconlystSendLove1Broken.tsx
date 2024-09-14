import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove1Broken = ({
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
      d="M12.384 16.868h1.377c.982 0 1.776-.707 1.776-1.69 0-.816-.553-1.47-1.345-1.668-1.133-.285-2.264-.508-3.447-.48-1.875.046-3.186 1.091-4.672 2.085M14.202 10.104s3.038-1.419 3.715-3.589c.438-1.368-.075-2.934-1.508-3.4a2.46 2.46 0 0 0-1.148-.077c-.384.065-.746.328-1.06.56-.31-.234-.674-.498-1.057-.564a2.44 2.44 0 0 0-1.149.082c-1.433.461-1.944 2.031-1.504 3.4.29.887.952 1.643 1.638 2.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.384 16.899c.696-.102 1.404 0 2.107-.016 1.63-.039 2.908-1.416 4.15-2.351a1.59 1.59 0 0 1 2.082.149 1.603 1.603 0 0 1 0 2.261c-1.34 1.346-2.525 2.594-4.34 3.301M6.072 20.036c1 0 1.91.012 2.897.207 1.746.345 3.392.677 5.065.539"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.762 21h1.032c.789 0 1.278-.556 1.278-1.343v-4.609c0-.788-.49-1.344-1.277-1.344H3.762"
    />
  </Svg>
);
export default IconlystSendLove1Broken;
