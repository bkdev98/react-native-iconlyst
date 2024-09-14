import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.922 21.808c-3.814 0-7.072-.577-7.072-2.887s3.237-4.41 7.072-4.41c3.814 0 7.072 2.08 7.072 4.39 0 2.308-3.237 2.907-7.072 2.907M9.922 11.216A4.534 4.534 0 1 0 5.39 6.683a4.52 4.52 0 0 0 4.501 4.533z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.131 8.13v4.01M21.178 10.134h-4.09"
    />
  </Svg>
);
export default IconlystAddUserLightcurved;
