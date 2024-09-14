import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwap2Outline = ({
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
      d="M8.214 3.79a2.79 2.79 0 0 0-2.788 2.787v2.136a.75.75 0 1 1-1.5 0V6.577A4.29 4.29 0 0 1 8.214 2.29a.75.75 0 1 1 0 1.5M19.297 14.714a.75.75 0 0 1 1.06 0l1.416 1.415a.75.75 0 0 1-1.06 1.06l-.886-.884-.885.884a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.297 14.714a.75.75 0 0 1 1.06 0l1.416 1.415a.75.75 0 0 1-1.06 1.06l-.886-.884-.885.884a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.827 14.574a.75.75 0 0 1 .75.75v2.136a4.29 4.29 0 0 1-4.288 4.288.75.75 0 1 1 0-1.5 2.79 2.79 0 0 0 2.788-2.788v-2.136a.75.75 0 0 1 .75-.75M2.855 17.04a4.708 4.708 0 1 1 9.416 0 4.708 4.708 0 0 1-9.416 0m4.708-3.208a3.208 3.208 0 1 0 0 6.416 3.208 3.208 0 0 0 0-6.416M12.23 6.958a4.709 4.709 0 1 1 9.418.002 4.709 4.709 0 0 1-9.417-.002m4.71-3.208a3.209 3.209 0 1 0-.001 6.417 3.209 3.209 0 0 0 0-6.417M2.73 6.849a.75.75 0 0 1 1.06 0l.886.884.884-.884a.75.75 0 1 1 1.061 1.06L5.206 9.324a.75.75 0 0 1-1.06 0L2.73 7.91a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinSwap2Outline;
