import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.957 3.55A2.46 2.46 0 0 0 9.884 4.8L2.837 17.01a2.47 2.47 0 0 0 0 2.493 2.47 2.47 0 0 0 2.16 1.247h6.96z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.957 20.75V3.552l.085-.001h.004a2.47 2.47 0 0 1 2.164 1.263l6.96 12.21c.445.78.44 1.71-.01 2.487a2.47 2.47 0 0 1-2.157 1.24z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTriangleBulk;
