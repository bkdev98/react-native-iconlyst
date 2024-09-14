import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper5Outline = ({
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
      d="M3.56 5.377c.71-.76 1.713-1.178 2.878-1.178h11.624c1.168 0 2.171.418 2.88 1.178C21.644 6.132 22 7.164 22 8.3V15.7c0 1.136-.356 2.168-1.058 2.923-.709.76-1.713 1.177-2.881 1.177H6.438c-1.168 0-2.172-.417-2.88-1.178C2.856 17.867 2.5 16.835 2.5 15.7V8.3c0-1.137.358-2.169 1.06-2.923M4.659 6.4C4.257 6.83 4 7.474 4 8.3V15.7c0 .827.256 1.47.656 1.9.395.424.985.7 1.782.7h11.623c.798 0 1.388-.276 1.783-.7.4-.43.656-1.073.656-1.9V8.3c0-.827-.256-1.47-.656-1.9-.395-.424-.985-.7-1.782-.7H6.438c-.794 0-1.384.275-1.78.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.914 10.549a.75.75 0 0 1 .75.75v1.403a.75.75 0 0 1-1.5 0v-1.403a.75.75 0 0 1 .75-.75M17.586 10.549a.75.75 0 0 1 .75.75v1.403a.75.75 0 1 1-1.5 0v-1.403a.75.75 0 0 1 .75-.75M9.21 12a3.038 3.038 0 1 1 6.076 0 3.038 3.038 0 0 1-6.075 0m3.04-1.537a1.538 1.538 0 1 0-.002 3.075 1.538 1.538 0 0 0 .001-3.075"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper5Outline;
