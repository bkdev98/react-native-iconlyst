import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeBold = ({
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
      d="M20.178 3.317c-.853-1.237-2.63-1.452-3.719-.362l-4.839 4.84a.2.2 0 0 0 .142.34H21.87c.123 0 .217-.11.195-.23a11.7 11.7 0 0 0-1.887-4.588M22.25 9.83a.197.197 0 0 0-.2-.194h-9.93a.2.2 0 0 0-.14.341l7.393 7.386c.083.083.22.077.293-.015A11.74 11.74 0 0 0 22.25 9.83M18.342 18.747a.197.197 0 0 0 .007-.287l-7.523-7.515a.2.2 0 0 0-.341.134l-.367 10.464a.197.197 0 0 0 .194.205c2.87.043 5.753-.958 8.03-3.001M8.393 21.563a.197.197 0 0 0 .23-.188l.379-10.472a.2.2 0 0 0-.341-.149l-5.206 5.207c-1.09 1.09-.875 2.867.362 3.72a11.7 11.7 0 0 0 4.576 1.882"
    />
  </Svg>
);
export default IconlystOrangeBold;
