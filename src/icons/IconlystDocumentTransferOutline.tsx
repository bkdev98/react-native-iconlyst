import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentTransferOutline = ({
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
      d="M10.661 17.35a.75.75 0 0 1-.75-.75v-4.08l-.484.487a.751.751 0 1 1-1.063-1.059l1.766-1.774a.75.75 0 0 1 1.281.529v5.9a.75.75 0 0 1-.75.746M13.574 17.345a.747.747 0 0 1-.75-.75v-5.9a.75.75 0 1 1 1.5 0v4.08l.484-.486a.75.75 0 1 1 1.064 1.058l-1.766 1.775a.75.75 0 0 1-.532.223"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.5 4.5 0 0 1-4.42-4.6V6.657A4.5 4.5 0 0 1 8.387 2.25h5.65a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.501.52.781 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.377 4.587m-7.879-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.937 3.086h7.91a3.044 3.044 0 0 0 2.905-3.082V9c0-.336-.129-.658-.362-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 0 1 1.5 0v2.894a1.81 1.81 0 0 0 1.805 1.81h2.737a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentTransferOutline;
