import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRotationBold = ({
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
      d="M12 10.125a2.01 2.01 0 1 1 .001-4.02 2.01 2.01 0 0 1 0 4.02m0-7.75a5.8 5.8 0 0 0-5.79 5.79c0 3.95 4.53 7.85 5.79 7.85s5.78-3.9 5.78-7.85c0-3.19-2.59-5.79-5.78-5.79M11.338 17.853a.75.75 0 0 0-1.061 0 .74.74 0 0 0-.088.926c-1.046-.116-2.026-.322-2.845-.625a6.4 6.4 0 0 1-.983-.453c-.694-.39-1.092-.838-1.092-1.23 0-.393.398-.841 1.092-1.23a.75.75 0 0 0-.732-1.31c-1.538.862-1.86 1.858-1.86 2.54 0 .683.322 1.677 1.857 2.537.396.224.79.406 1.202.553 1.006.375 2.212.622 3.492.742l-.043.043a.75.75 0 0 0 1.06 1.06l1.247-1.246a.75.75 0 0 0 0-1.061zM18.371 13.931a.75.75 0 0 0-.732 1.31c.694.388 1.092.836 1.092 1.23 0 .392-.398.84-1.109 1.24-.28.166-.594.311-.963.445-.602.223-1.292.4-2.05.526a.75.75 0 0 0 .245 1.48 12.6 12.6 0 0 0 2.322-.598 7 7 0 0 0 1.195-.555c1.538-.86 1.86-1.856 1.86-2.538 0-.684-.323-1.68-1.86-2.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinRotationBold;
