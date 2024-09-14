import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTerminalBold = ({
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
      d="m10.957 10.418-5.25-5.25a.999.999 0 1 0-1.414 1.414l4.543 4.543-4.543 4.543a.999.999 0 1 0 1.414 1.414l5.25-5.25a1 1 0 0 0 0-1.414M19 17.125h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTerminalBold;
