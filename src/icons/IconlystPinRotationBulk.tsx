import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRotationBulk = ({
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
      d="M12 2.375a5.8 5.8 0 0 0-5.79 5.79c0 3.95 4.53 7.85 5.79 7.85s5.78-3.9 5.78-7.85c0-3.19-2.59-5.79-5.78-5.79"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.338 17.852a.75.75 0 0 0-1.061 0 .74.74 0 0 0-.088.927c-1.046-.117-2.026-.322-2.845-.626a6.4 6.4 0 0 1-.983-.453c-.694-.389-1.092-.837-1.092-1.229s.398-.842 1.092-1.23a.75.75 0 0 0-.732-1.31c-1.538.861-1.86 1.857-1.86 2.54 0 .682.322 1.676 1.857 2.536.396.224.79.406 1.202.554 1.006.374 2.212.621 3.492.742l-.043.042a.75.75 0 0 0 1.06 1.061l1.247-1.247a.75.75 0 0 0 0-1.06zM18.371 13.931a.75.75 0 0 0-.732 1.31c.694.388 1.092.836 1.092 1.23 0 .392-.398.84-1.109 1.24-.28.166-.594.311-.963.445-.602.223-1.292.4-2.05.526a.75.75 0 0 0 .245 1.48 12.6 12.6 0 0 0 2.322-.598 7 7 0 0 0 1.195-.555c1.538-.86 1.86-1.856 1.86-2.538 0-.684-.323-1.68-1.86-2.54M12.001 10.126a2.01 2.01 0 1 1 0-4.02 2.01 2.01 0 0 1 0 4.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinRotationBulk;
