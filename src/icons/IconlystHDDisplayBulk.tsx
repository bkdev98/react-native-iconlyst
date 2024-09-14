import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDDisplayBulk = ({
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
      d="M17.805 3.031H7.862a4.534 4.534 0 0 0-4.528 4.53v5.45a4.535 4.535 0 0 0 4.528 4.531h9.943a4.536 4.536 0 0 0 4.529-4.53v-5.45a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.694 12.904a.75.75 0 0 1-1.5 0v-1.75H9.367v1.75a.75.75 0 0 1-1.5 0v-4.99a.75.75 0 0 1 1.5 0v1.74h1.827v-1.74a.75.75 0 0 1 1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.439 13.654h.832a3.25 3.25 0 0 0 3.245-3.25 3.245 3.245 0 0 0-3.245-3.24h-.832a.75.75 0 0 0-.75.75v4.99c0 .414.336.75.75.75m.832-4.99h-.082v3.49h.082a1.744 1.744 0 1 0 0-3.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.338 19.464h8.99a.75.75 0 0 1 0 1.5h-8.99a.75.75 0 0 1 0-1.5"
    />
  </Svg>
);
export default IconlystHDDisplayBulk;
