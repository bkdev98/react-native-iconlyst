import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentZip2Outline = ({
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
      fill={props.color}
      d="M16.25 21.75H8.294a4.5 4.5 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861L19.85 7.06c.5.522.779 1.217.776 1.94v8.165a4.544 4.544 0 0 1-4.376 4.585m-7.879-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.937 3.086h7.912a3.044 3.044 0 0 0 2.906-3.082V9a1.3 1.3 0 0 0-.36-.9l-3.793-3.949a1.3 1.3 0 0 0-.937-.4H8.371z"
    />
    <Path
      fill={props.color}
      d="M19.813 9.267h-2.74a3.315 3.315 0 0 1-3.3-3.311V3.062a.75.75 0 0 1 1.5 0v2.894a1.813 1.813 0 0 0 1.805 1.81h2.738a.75.75 0 0 1 0 1.5zM9.865 18.559a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M9.865 15.629a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M9.865 6.848a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M9.865 9.773a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M9.865 12.7a.746.746 0 0 1-.75-.746v-.01a.75.75 0 1 1 .75.755"
    />
  </Svg>
);
export default IconlystDocumentZip2Outline;
