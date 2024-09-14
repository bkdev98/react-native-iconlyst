import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.854c-7.199 0-9.75 2.552-9.75 9.75s2.551 9.75 9.75 9.75S22 19.802 22 12.604s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.536 16.05a.75.75 0 0 0 1.37-.612c-.13-.29-1.32-2.835-3.233-2.835-1.118 0-1.994 1.054-2.842 2.075l-.001.002c-.397.478-1.136 1.367-1.42 1.37-.402 0-.712-.214-1.183-.564-.485-.362-1.088-.81-1.912-.81-1.601 0-2.562 1.843-2.666 2.054a.749.749 0 0 0 1.342.668c.2-.4.789-1.222 1.324-1.222.31 0 .589.195 1.017.513.516.384 1.158.862 2.079.862.986 0 1.758-.93 2.574-1.914l.012-.015c.508-.61 1.265-1.52 1.676-1.52.746 0 1.578 1.312 1.863 1.948M10.889 9.709A2.06 2.06 0 0 0 8.83 7.65a2.06 2.06 0 0 0 0 4.116 2.06 2.06 0 0 0 2.058-2.058"
    />
  </Svg>
);
export default IconlystImageBulkcurved;
