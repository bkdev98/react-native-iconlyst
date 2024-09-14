import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentLoveOutline = ({
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
      d="M12.248 10.512a2.65 2.65 0 0 1 1.945-.132h.002c1.616.521 2.077 2.24 1.652 3.568v.002c-.343 1.062-1.208 1.92-1.888 2.472a10.4 10.4 0 0 1-1.314.905l-.025.014-.008.004-.002.001h-.001l-.36-.658-.36.658-.002-.001-.003-.002-.007-.004-.025-.014-.086-.05a10.544 10.544 0 0 1-1.233-.861c-.68-.553-1.547-1.411-1.88-2.467-.426-1.331.041-3.046 1.655-3.567l.006-.002a2.66 2.66 0 0 1 1.934.134m.001 6.176-.36.658a.75.75 0 0 0 .72 0zm.001-.877a9 9 0 0 0 .763-.553c.624-.508 1.201-1.134 1.405-1.767.252-.786-.079-1.488-.683-1.683a1.15 1.15 0 0 0-1.036.175.75.75 0 0 1-.897.002 1.16 1.16 0 0 0-1.036-.176c-.605.197-.935.899-.684 1.682v.004c.196.619.769 1.244 1.398 1.756.287.234.562.424.77.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.295a4.51 4.51 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.375 4.587m-7.88-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.938 3.086h7.909a3.044 3.044 0 0 0 2.906-3.082V9a1.29 1.29 0 0 0-.362-.9L14.97 4.15a1.3 1.3 0 0 0-.937-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.814 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 1 1 1.5 0v2.894a1.81 1.81 0 0 0 1.805 1.81h2.737a.75.75 0 1 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentLoveOutline;
