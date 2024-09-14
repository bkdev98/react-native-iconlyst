import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShekelCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 7.25a.75.75 0 0 1 .75.75v7.111c0 .905-.733 1.639-1.639 1.639h-1.777a3.417 3.417 0 0 1-3.417-3.417v-2.222a.75.75 0 0 1 1.5 0v2.222c0 1.059.858 1.917 1.917 1.917h1.777a.14.14 0 0 0 .14-.139V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.25 8.889c0-.905.734-1.639 1.639-1.639h1.778a3.417 3.417 0 0 1 3.416 3.417v2.222a.75.75 0 0 1-1.5 0v-2.222a1.917 1.917 0 0 0-1.916-1.917H8.889a.14.14 0 0 0-.139.139V16a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShekelCircleOutline;
