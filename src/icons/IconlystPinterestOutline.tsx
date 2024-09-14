import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M13 16.94c-1 0-1.9-.38-2.51-1.05-.63-.71-.89-1.67-.72-2.7.07-.41.45-.69.86-.62s.69.45.62.86c-.1.59.03 1.09.36 1.46.35.39.9.59 1.52.55 1.87-.1 2.88-1.93 2.88-3.59 0-2.12-1.69-3.71-3.93-3.71S7.83 9.78 7.83 11.8a3.2 3.2 0 0 0 .4 1.57c.2.36.08.82-.28 1.02a.75.75 0 0 1-1.02-.28c-.17-.3-.31-.62-.4-.95-.13-.44-.2-.89-.2-1.34 0-2.85 2.58-5.16 5.75-5.16s5.43 2.24 5.43 5.21c0 2.35-1.51 4.93-4.3 5.09H13z"
    />
    <Path
      fill={props.color}
      d="M8.86 21.131c-.06 0-.11 0-.17-.02-.4-.09-.65-.5-.56-.9l2.2-9.36c.09-.4.5-.66.9-.56.4.09.65.5.56.9l-2.2 9.36c-.08.35-.39.58-.73.58"
    />
  </Svg>
);
export default IconlystPinterestOutline;
