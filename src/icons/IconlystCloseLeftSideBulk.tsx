import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseLeftSideBulk = ({
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
      d="M14.708 2.8a.3.3 0 0 0-.3-.3H7.784C4.624 2.5 2.5 4.72 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h6.625a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.807 14.403a.75.75 0 0 1-1.06 0L9.404 13.06l-1.343 1.342a.749.749 0 1 1-1.06-1.061L8.344 12l-1.343-1.343a.75.75 0 1 1 1.061-1.061l1.343 1.343 1.342-1.343a.749.749 0 1 1 1.06 1.06l-1.342 1.344 1.342 1.34a.75.75 0 0 1 0 1.062M16.518 2.506a.29.29 0 0 0-.3.293v18.4c0 .166.134.301.3.294 2.994-.137 4.982-2.32 4.982-5.52V8.025c0-3.199-1.988-5.382-4.982-5.519"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseLeftSideBulk;
