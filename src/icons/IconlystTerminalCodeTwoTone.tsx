import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTerminalCodeTwoTone = ({
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
      d="m11.455 20.206-1.421-1.421a2.16 2.16 0 0 0-1.526-.632H7.44a3.94 3.94 0 0 1-3.94-3.94V7.3a3.94 3.94 0 0 1 3.94-3.94H17.56A3.94 3.94 0 0 1 21.5 7.3v6.915a3.94 3.94 0 0 1-3.939 3.94h-1.068c-.572 0-1.12.226-1.525.63l-1.423 1.422a1.48 1.48 0 0 1-2.09 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.787 8.29 2.19 2.188-2.19 2.19M13.163 13.2h3.05"
    />
  </Svg>
);
export default IconlystTerminalCodeTwoTone;
