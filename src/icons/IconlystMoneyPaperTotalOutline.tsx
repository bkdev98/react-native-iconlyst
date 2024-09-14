import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperTotalOutline = ({
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
      d="M3.56 9.064c.71-.76 1.713-1.177 2.878-1.177h11.624c1.168 0 2.171.417 2.88 1.178.702.754 1.058 1.786 1.058 2.923v5.556c0 1.137-.356 2.168-1.058 2.923-.709.76-1.713 1.178-2.881 1.178H6.438c-1.168 0-2.172-.417-2.88-1.178-.702-.755-1.058-1.786-1.058-2.923v-5.556c0-1.138.358-2.17 1.06-2.924m1.098 1.023c-.401.43-.658 1.075-.658 1.9v5.557c0 .827.256 1.471.656 1.901.395.424.985.7 1.782.7h11.623c.798 0 1.388-.276 1.783-.7.4-.43.656-1.074.656-1.9v-5.557c0-.827-.256-1.471-.656-1.901-.395-.424-.985-.7-1.782-.7H6.438c-.794 0-1.384.276-1.78.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.455 17.652a.75.75 0 0 1 .75-.75h1.403a.75.75 0 0 1 0 1.5H6.205a.75.75 0 0 1-.75-.75M16.14 11.879a.75.75 0 0 1 .75-.75h1.404a.75.75 0 0 1 0 1.5H16.89a.75.75 0 0 1-.75-.75M9.21 14.766a3.038 3.038 0 1 1 6.076 0 3.038 3.038 0 0 1-6.075 0m3.04-1.537a1.538 1.538 0 1 0-.002 3.075 1.538 1.538 0 0 0 .001-3.075M6.254 5.893a.75.75 0 0 1 .75-.75h10.493a.75.75 0 0 1 0 1.5H7.004a.75.75 0 0 1-.75-.75M8.191 3.23a.75.75 0 0 1 .75-.75h6.618a.75.75 0 0 1 0 1.5H8.94a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperTotalOutline;
