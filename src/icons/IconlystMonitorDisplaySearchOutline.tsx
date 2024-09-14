import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplaySearchOutline = ({
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
      d="M11.904 3.965a.75.75 0 0 1 .75-.75h4.454A4.687 4.687 0 0 1 21.796 7.9v5.333a4.687 4.687 0 0 1-4.687 4.687H7.393a4.687 4.687 0 0 1-4.688-4.687V11.41a.75.75 0 0 1 1.5 0v1.824a3.187 3.187 0 0 0 3.188 3.187h9.715a3.187 3.187 0 0 0 3.187-3.187V7.901a3.187 3.187 0 0 0-3.187-3.186h-4.454a.75.75 0 0 1-.75-.75M6.67 21a.75.75 0 0 1 .75-.75h9.662a.75.75 0 0 1 0 1.5H7.42a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.304 16.432a.75.75 0 0 1 .62.86L10.3 21.12a.75.75 0 1 1-1.48-.24l.622-3.828a.75.75 0 0 1 .86-.62M14.198 16.432a.75.75 0 0 1 .86.62l.623 3.827a.75.75 0 1 1-1.48.241l-.623-3.828a.75.75 0 0 1 .62-.86M6.473 3.75a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8m2.822 3.797a3.4 3.4 0 1 0-1.092 1.03l.878.876a.75.75 0 1 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplaySearchOutline;
