import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHashtagOutline = ({
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
      d="M13.18 17.741a.75.75 0 0 1-.745-.844l.084-.663h-1.457l-.108.851a.75.75 0 1 1-1.488-.188l.084-.663h-.628a.75.75 0 1 1 0-1.5h.818l.18-1.424h-.74a.75.75 0 1 1 0-1.5h.93l.109-.85a.748.748 0 0 1 1.12-.567.75.75 0 0 1 .368.755l-.084.662h1.456l.108-.85a.75.75 0 1 1 1.488.188l-.084.662h.608a.75.75 0 0 1 0 1.5h-.8l-.18 1.424h.72a.75.75 0 1 1 0 1.5h-.911l-.107.851a.75.75 0 0 1-.741.656m-1.93-3.007h1.457l.18-1.424H11.43z"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.5 4.5 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.376 4.587m-7.879-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.937 3.086h7.91a3.044 3.044 0 0 0 2.905-3.082V9c0-.336-.13-.658-.362-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 0 1 1.5 0v2.894a1.81 1.81 0 0 0 1.8 1.81h2.737a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentHashtagOutline;
