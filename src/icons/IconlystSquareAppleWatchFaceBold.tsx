import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchFaceBold = ({
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
      d="M15.207 21.245H8.86a.75.75 0 0 0 0 1.5h6.348a.75.75 0 0 0 0-1.5M8.86 2.745h6.348a.75.75 0 0 0 0-1.5H8.859a.75.75 0 0 0 0 1.5M14.753 13.116c.36.21.47.67.26 1.03-.14.23-.39.36-.64.36-.13 0-.27-.03-.39-.1l-2.41-1.44a.76.76 0 0 1-.37-.65v-3.1c0-.42.34-.75.75-.75.42 0 .75.33.75.75v2.68zm3.31-7.27c-.69-.69-1.71-1.06-2.94-1.06h-6.17c-2.49 0-3.98 1.45-3.98 3.88v6.59c0 2.44 1.53 3.95 3.98 3.95h6.16c2.49 0 3.97-1.46 3.97-3.89v-6.65c.01-1.17-.35-2.14-1.02-2.82"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchFaceBold;
