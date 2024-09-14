import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTitleCaseBulk = ({
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
      d="M17.83 16.438a2.173 2.173 0 0 1-2.17-2.17c0-1.196.974-2.17 2.17-2.17s2.17.974 2.17 2.17-.974 2.17-2.17 2.17m3.17-6.14c-.37 0-.679.21-.852.507a4.15 4.15 0 0 0-2.318-.707 4.175 4.175 0 0 0-4.17 4.17 4.175 4.175 0 0 0 4.17 4.17c.857 0 1.654-.261 2.318-.707a.99.99 0 0 0 .852.508 1 1 0 0 0 1-1v-5.941a1 1 0 0 0-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.229 12.548 1.527-3.493 1.527 3.493zm2.443-6.39a.999.999 0 0 0-1.832 0L2.084 17.037a1 1 0 0 0 1.832.8l1.439-3.29h4.803l1.438 3.29a1 1 0 1 0 1.832-.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTitleCaseBulk;
