import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColdDrinkBold = ({
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
      d="M5.819 3.613A1.6 1.6 0 0 1 7.4 2.25H16.6c.792 0 1.465.58 1.581 1.363l.678 4.564c.666 3.988-2.189 7.643-6.11 8.06v4.013h1.442a.75.75 0 0 1 0 1.5H9.81a.75.75 0 0 1 0-1.5h1.44v-4.013c-3.921-.417-6.775-4.072-6.11-8.06zm1.483.222-.679 4.57-.002.013a6 6 0 0 0-.036.25l.313-.192a5.8 5.8 0 0 1 5.707-.187 4.29 4.29 0 0 0 4.313-.192l.377-.242-.597-4.02a.1.1 0 0 0-.099-.085H7.401a.1.1 0 0 0-.099.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColdDrinkBold;
