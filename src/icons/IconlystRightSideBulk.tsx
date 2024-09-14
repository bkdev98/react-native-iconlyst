import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightSideBulk = ({
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
      d="M14.709 2.8a.3.3 0 0 0-.3-.3H7.784C4.624 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.283 5.527h6.626a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.218 21.2c0 .166.134.301.3.294 2.993-.137 4.982-2.32 4.982-5.52V8.028c0-3.2-1.99-5.383-4.982-5.52a.29.29 0 0 0-.3.294zM7.802 15.115a.75.75 0 0 1 .04-1.062l2.212-2.052-2.212-2.054a.75.75 0 0 1-.04-1.061.75.75 0 0 1 1.06-.04l2.804 2.605a.75.75 0 0 1 0 1.1l-2.804 2.602a.75.75 0 0 1-1.06-.039"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightSideBulk;
