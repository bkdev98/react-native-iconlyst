import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchChargeBulk = ({
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
      d="M18.063 5.845c-.69-.69-1.71-1.06-2.94-1.06h-6.17c-2.49 0-3.98 1.45-3.98 3.88v6.59c0 2.44 1.53 3.95 3.98 3.95h6.16c2.49 0 3.98-1.46 3.98-3.89v-6.65c0-1.16-.36-2.14-1.03-2.82"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.263 12.745a.74.74 0 0 1-.64-.37.75.75 0 0 1-.02-.74l1.58-2.9c.2-.36.66-.5 1.02-.3s.5.65.3 1.02l-.98 1.79h2.28c.26 0 .51.14.64.37.14.22.14.51.02.74l-1.58 2.9c-.14.25-.39.39-.66.39q-.18 0-.36-.09c-.36-.2-.5-.66-.3-1.02l.98-1.79zM15.207 21.245H8.86a.75.75 0 0 0 0 1.5h6.348a.75.75 0 0 0 0-1.5M8.86 2.745h6.348a.75.75 0 0 0 0-1.5H8.86a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchChargeBulk;
