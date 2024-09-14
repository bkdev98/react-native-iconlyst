import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorSquareBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.72 2.5 8.026v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.756 12a.75.75 0 0 1-1.5 0V8.106a.75.75 0 0 1 1.5 0zm0 3.741a.75.75 0 0 1-1.5 0c0-.414.336-.774.75-.774s.75.312.75.726z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorSquareBulk;
