import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetroOutline = ({
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
      fillRule="evenodd"
      d="M9.467 5.232c-.85 0-1.579.602-1.742 1.435l-.363 1.86a1.775 1.775 0 0 0 1.742 2.117h6.794a1.775 1.775 0 0 0 1.742-2.116l-.363-1.86a1.776 1.776 0 0 0-1.743-1.436zm-.27 1.724a.275.275 0 0 1 .27-.224h6.067c.132 0 .246.094.271.224l.363 1.86a.275.275 0 0 1-.27.328H9.104a.275.275 0 0 1-.27-.328z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.64 12.17a.946.946 0 1 0 .001 1.89.946.946 0 0 0 0-1.89M16.36 12.17a.946.946 0 1 0 0 1.89.946.946 0 0 0 0-1.89"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.012 2.25a4.36 4.36 0 0 0-4.317 3.768l-.898 6.57a4.36 4.36 0 0 0 3.068 4.767l-1.176 1.717a1 1 0 0 0-.083.121l-.947 1.383a.75.75 0 1 0 1.237.848l.767-1.12H18.34l.767 1.12a.75.75 0 1 0 1.238-.848l-.961-1.403a1 1 0 0 0-.057-.082l-1.189-1.736a4.36 4.36 0 0 0 3.066-4.766l-.898-6.571a4.36 4.36 0 0 0-4.318-3.768zM7.691 18.804l.868-1.268h7.886l.868 1.268zM6.18 6.221A2.86 2.86 0 0 1 9.012 3.75h6.976a2.86 2.86 0 0 1 2.832 2.47l.898 6.572a2.857 2.857 0 0 1-2.832 3.244H8.114a2.858 2.858 0 0 1-2.831-3.244z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMetroOutline;
