import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.012 18.78H6.689c-1.966 0-3.189-1.387-3.189-3.35v-7.4c0-1.963 1.223-3.35 3.188-3.35h11.624c1.96 0 3.188 1.387 3.188 3.35v2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.715 8.18h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.213 11.729a2.287 2.287 0 1 1 4.575 0 2.287 2.287 0 0 1-4.575 0M17.634 15.42l.748-1.582a.256.256 0 0 1 .47 0l.748 1.581 1.675.255c.214.033.3.314.144.47l-1.21 1.236.285 1.745c.037.223-.188.395-.38.288l-1.497-.823-1.497.823c-.192.107-.418-.065-.38-.288l.284-1.745-1.21-1.236c-.156-.156-.07-.437.144-.47z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperStarTwoTone;
