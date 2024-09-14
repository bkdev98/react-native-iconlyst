import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchFaceBulk = ({
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
      d="M18.063 5.846c-.69-.69-1.71-1.06-2.94-1.06h-6.17c-2.49 0-3.98 1.45-3.98 3.88v6.59c0 2.44 1.53 3.95 3.98 3.95h6.16c2.49 0 3.97-1.46 3.97-3.89v-6.65c.01-1.17-.35-2.14-1.02-2.82"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.013 14.146c.21-.36.1-.82-.26-1.03l-2.05-1.22v-2.68c0-.42-.33-.75-.75-.75-.41 0-.75.33-.75.75v3.1c0 .27.14.51.37.65l2.41 1.44c.12.07.26.1.39.1.25 0 .5-.13.64-.36"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.207 21.245H8.86a.75.75 0 0 0 0 1.5h6.348a.75.75 0 0 0 0-1.5M8.86 2.745h6.348a.75.75 0 0 0 0-1.5H8.86a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchFaceBulk;
