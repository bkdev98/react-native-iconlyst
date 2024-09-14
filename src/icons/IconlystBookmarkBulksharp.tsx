import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkBulksharp = ({
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
      d="M4.272 2.109v19.78l8.002-3.675 7.954 3.677V2.109z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M16.522 9.834H7.979v-1.5h8.543z" />
  </Svg>
);
export default IconlystBookmarkBulksharp;
