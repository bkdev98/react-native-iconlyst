import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.701 7.853c-.84-.28-1.88-.51-4.04-.76.21.59.4 1.25.57 1.97.09.4-.16.8-.56.89a.73.73 0 0 1-.9-.56c-.23-.99-.5-1.81-.8-2.47-1.59-.13-3.18-.13-4.76 0-.31.68-.6 1.53-.83 2.56-.08.35-.39.58-.73.58-.06 0-.12 0-.17-.02a.735.735 0 0 1-.56-.9c.17-.75.38-1.43.62-2.06-2.21.25-3.26.49-4.1.77-.88.3-1.44 1.14-1.36 2.05.71 8.05 3.9 12.13 9.49 12.13s8.79-4.08 9.49-12.13c.09-.91-.47-1.75-1.36-2.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.211 6.923q.36-.81.75-1.32c.58-.79 1.18-1.12 1.65-1.12.68 0 1.59.68 2.36 2.44.27.02.55.04.82.07.31.03.6.07.87.1-.38-1.02-.81-1.86-1.31-2.51-.79-1.04-1.72-1.6-2.74-1.6-1.64 0-3.11 1.5-4.07 4.1q.375-.045.81-.09c.29-.03.58-.06.86-.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBazarBold;
