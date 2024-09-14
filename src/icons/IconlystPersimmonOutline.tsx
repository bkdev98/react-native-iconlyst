import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersimmonOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.177 2.861a.75.75 0 0 0 .599.876c.753.142 1.108.536 1.293.96.203.468.208 1.011.145 1.354a.75.75 0 1 0 1.476.271c.103-.56.104-1.42-.246-2.223-.369-.849-1.116-1.596-2.391-1.836a.75.75 0 0 0-.876.598M18.09 8.145a.75.75 0 0 0 .002 1.061c1.183 1.182 1.876 2.694 1.876 4.327 0 3.605-3.454 6.717-7.968 6.717s-7.968-3.112-7.968-6.717c0-1.633.693-3.145 1.876-4.327a.75.75 0 0 0-1.06-1.061c-1.43 1.43-2.316 3.311-2.316 5.388 0 4.643 4.352 8.217 9.468 8.217s9.468-3.574 9.468-8.217c0-2.077-.886-3.959-2.316-5.388a.75.75 0 0 0-1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.03 5.598c-1.78-.8-3.41-.698-4.728-.207C5.936 5.9 4.92 6.818 4.383 7.537a.75.75 0 0 0-.047.826c.352.604 1.08 1.318 2.157 1.623.897.253 1.97.205 3.184-.334.33.694.986 1.418 2.136 1.714a.75.75 0 0 0 .374 0c1.15-.296 1.806-1.02 2.136-1.714 1.213.539 2.287.588 3.184.334 1.077-.305 1.804-1.02 2.157-1.623a.75.75 0 0 0-.115-.905C18.24 6.133 17.084 5.32 15.793 5.06c-1.203-.243-2.401.019-3.764.537m5.972 2.447c-.223.2-.525.39-.903.497-.633.18-1.577.154-2.86-.627a.75.75 0 0 0-1.14.628c-.005.264-.234 1.004-1.1 1.313-.865-.31-1.094-1.049-1.098-1.313a.75.75 0 0 0-1.14-.628c-1.283.78-2.228.806-2.86.627a2.3 2.3 0 0 1-.944-.535 5.3 5.3 0 0 1 1.869-1.21c1.034-.385 2.339-.467 3.836.288a.75.75 0 0 0 .617.026c1.421-.569 2.367-.751 3.217-.58.737.149 1.508.585 2.506 1.514"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPersimmonOutline;
