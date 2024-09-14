import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearch2Bulk = ({
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
      d="M11.135 2.499a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.794-1.982-1.98a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.415"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.065 9.81c-.07.02-.15.03-.23.03-.31 0-.61-.2-.71-.52a3.73 3.73 0 0 0-2.46-2.41.745.745 0 0 1-.49-.94c.12-.39.54-.61.93-.49 1.64.5 2.93 1.77 3.45 3.38.12.4-.09.82-.49.95"
    />
  </Svg>
);
export default IconlystSearch2Bulk;
