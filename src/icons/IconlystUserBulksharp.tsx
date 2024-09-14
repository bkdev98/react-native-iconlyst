import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBulksharp = ({
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
      d="M14.205 10.99c.61.43 1.36.69 2.16.69a3.75 3.75 0 0 0 3.74-3.75c0-2.06-1.68-3.74-3.74-3.74-.58 0-1.12.13-1.61.37.47.83.74 1.79.74 2.81 0 1.37-.48 2.63-1.29 3.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.735 12.13c1.52 0 2.87-.72 3.74-1.83.64-.8 1.02-1.82 1.02-2.93 0-.82-.21-1.59-.57-2.26a4.77 4.77 0 0 0-4.19-2.49c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.76 4.75 4.76"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.985 16.82c-.76-2.41-2.8-3.79-5.6-3.79h-.04c-1.23 0-2.3.27-3.2.76 2.26.82 3.94 2.51 4.72 4.86 1.49-.16 2.8-.58 3.9-1.25l.34-.21z" />
      <Path d="M16.835 18.72c-.79-2.15-2.43-3.61-4.67-4.2-.73-.2-1.54-.3-2.4-.3h-.05c-3.6 0-6.22 1.77-7.2 4.86l-.12.37.34.2c1.9 1.17 4.18 1.73 6.95 1.73h.05c2.84.01 5.1-.56 7.01-1.73l.34-.2-.12-.37c-.04-.12-.08-.24-.13-.36" />
    </G>
  </Svg>
);
export default IconlystUserBulksharp;
