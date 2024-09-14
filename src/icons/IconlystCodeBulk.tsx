import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeBulk = ({
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
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.283 5.527h8.434c3.16 0 5.283-2.221 5.283-5.527V8.026c0-3.306-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.243 12.531-2.65 2.65a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l2.12-2.12-2.12-2.119a.75.75 0 0 1 1.06-1.06l2.65 2.648a.75.75 0 0 1 0 1.061m-6.775 1.59a.749.749 0 1 1-1.06 1.06L6.76 12.53a.75.75 0 0 1 0-1.06l2.65-2.65a.75.75 0 1 1 1.06 1.061l-2.12 2.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodeBulk;
