import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove1Light = ({
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
      d="M12.884 16.868h1.377c.982 0 1.776-.707 1.776-1.69 0-.816-.553-1.47-1.345-1.668-1.133-.285-2.264-.508-3.447-.48-1.875.046-3.186 1.091-4.672 2.085"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.416 6.515c.44-1.368-.07-2.938-1.504-3.4a2.44 2.44 0 0 0-1.149-.08c-.383.065-.746.33-1.057.563-.314-.232-.676-.495-1.06-.56a2.46 2.46 0 0 0-1.148.078c-1.433.465-1.946 2.031-1.508 3.4.676 2.169 3.716 3.588 3.716 3.588s2.992-1.393 3.71-3.589"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.884 16.899c.696-.102 1.405 0 2.107-.016 1.63-.039 2.908-1.416 4.15-2.351a1.59 1.59 0 0 1 2.082.149 1.603 1.603 0 0 1 0 2.261c-1.34 1.346-2.525 2.594-4.34 3.301-2.522.98-4.861.505-7.414 0-.988-.195-1.897-.207-2.897-.207M4.262 21h1.032c.789 0 1.278-.556 1.278-1.343v-4.609c0-.788-.49-1.344-1.277-1.344H4.262"
    />
  </Svg>
);
export default IconlystSendLove1Light;
