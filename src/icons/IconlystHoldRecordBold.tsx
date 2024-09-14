import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHoldRecordBold = ({
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
      d="M8.15 20.25H6.892a3.144 3.144 0 0 1-3.142-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.646 4.646 0 0 0 4.642 4.64H8.15a.75.75 0 0 0 0-1.5M20.998 14.781a.75.75 0 0 0-.75.75v1.58a3.144 3.144 0 0 1-3.142 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.646 4.646 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M3 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.289a.75.75 0 0 0 0-1.5H6.893A4.647 4.647 0 0 0 2.25 6.89v1.58c0 .414.336.75.75.75M17.108 2.251H15.85a.75.75 0 0 0 0 1.5h1.258a3.144 3.144 0 0 1 3.142 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.646 4.646 0 0 0-4.642-4.64M12 12.996c-.55 0-1-.44-1-1 0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1m4.7-1c0-2.59-2.11-4.7-4.7-4.7s-4.7 2.11-4.7 4.7a4.7 4.7 0 0 0 9.4 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHoldRecordBold;
