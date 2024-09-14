import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHomeBold = ({
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
      d="M9.3 20.329v-2.913a1.354 1.354 0 0 1 1.353-1.351h2.741c.748 0 1.358.601 1.361 1.351v2.923a1.16 1.16 0 0 0 1.14 1.161h1.828a3.28 3.28 0 0 0 3.301-3.261V9.943a2.33 2.33 0 0 0-.914-1.804l-6.249-4.982a3 3 0 0 0-3.747 0L3.89 8.15a2.29 2.29 0 0 0-.914 1.804v8.274a3.285 3.285 0 0 0 3.3 3.272h1.83c.648 0 1.176-.517 1.179-1.171"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeHomeBold;
