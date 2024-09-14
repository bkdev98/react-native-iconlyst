import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCcEmailBulk = ({
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
      d="M2.5 12c0-5.244 4.256-9.5 9.5-9.5s9.5 4.256 9.5 9.5-4.256 9.5-9.5 9.5-9.5-4.256-9.5-9.5"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.956 10.661a1.82 1.82 0 0 1 2.39-.163.75.75 0 1 0 .907-1.195 3.32 3.32 0 0 0-4.36.3 3.32 3.32 0 0 0 0 4.71 3.34 3.34 0 0 0 4.356.303.75.75 0 0 0-.9-1.2c-.72.54-1.751.48-2.396-.164a1.82 1.82 0 0 1-.003-2.585zM14.22 10.661a1.82 1.82 0 0 1 2.39-.163.75.75 0 1 0 .907-1.195 3.32 3.32 0 0 0-4.36.3 3.32 3.32 0 0 0 0 4.71 3.34 3.34 0 0 0 4.356.303.75.75 0 1 0-.9-1.2c-.72.54-1.751.48-2.396-.164a1.82 1.82 0 0 1-.003-2.585z"
    />
  </Svg>
);
export default IconlystCcEmailBulk;
