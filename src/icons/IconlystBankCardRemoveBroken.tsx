import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRemoveBroken = ({
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
      d="M5.392 4.959C4.04 5.591 3.25 6.97 3.25 8.725v3.864M3.25 15.316c0 2.441 1.519 4.162 3.96 4.162h10.07c.572 0 1.09-.097 1.554-.272M21.25 15.32V8.725c0-2.441-1.527-4.163-3.968-4.163h-6.568M21.25 9.857h-5.54M10.01 9.857H3.25M7.423 15.193h2.968M19.94 20.383 4.123 3.617"
    />
  </Svg>
);
export default IconlystBankCardRemoveBroken;
