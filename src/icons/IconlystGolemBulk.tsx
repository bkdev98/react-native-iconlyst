import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGolemBulk = ({
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
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.628 7.914.418-.483a.751.751 0 0 0-1.135-.981l-.394.455a2.6 2.6 0 0 0-1.124-.265 2.63 2.63 0 0 0-2.621 2.63c0 1.183.792 2.173 1.871 2.498v.925a2.61 2.61 0 0 0-1.871 2.497 2.623 2.623 0 0 0 2.621 2.62 2.624 2.624 0 0 0 2.622-2.62 2.615 2.615 0 0 0-1.872-2.497v-.925a2.615 2.615 0 0 0 1.872-2.498c0-.497-.147-.96-.387-1.356m-2.235.226c-.618 0-1.121.507-1.121 1.13a1.122 1.122 0 0 0 2.243 0c0-.623-.503-1.13-1.122-1.13m0 8.17a1.12 1.12 0 0 1-1.122-1.12 1.122 1.122 0 0 1 2.243 0c0 .618-.502 1.12-1.121 1.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGolemBulk;
