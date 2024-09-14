import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSearchOutline = ({
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
      d="M4.656 6.462c-.4.43-.656 1.074-.656 1.9v7.4c0 .826.256 1.47.656 1.9.395.424.985.7 1.783.7h6.223a.75.75 0 0 1 0 1.5H6.439c-1.168 0-2.172-.417-2.88-1.178-.703-.755-1.059-1.786-1.059-2.923V8.363c0-1.137.356-2.169 1.058-2.923.708-.76 1.712-1.178 2.88-1.178h11.623c1.166 0 2.17.417 2.878 1.177.703.755 1.06 1.786 1.06 2.924v1.998a.75.75 0 0 1-1.5 0V8.363c0-.826-.256-1.47-.657-1.9-.396-.425-.986-.701-1.78-.701H6.437c-.797 0-1.387.276-1.782.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.715 8.514a.75.75 0 0 1 .75-.75h1.403a.75.75 0 0 1 0 1.5H6.465a.75.75 0 0 1-.75-.75M12.25 10.525a1.537 1.537 0 1 0 0 3.075 1.537 1.537 0 0 0 0-3.075m-3.037 1.538a3.037 3.037 0 1 1 6.074 0 3.037 3.037 0 0 1-6.074 0M15.404 16.289a3.02 3.02 0 1 1 5.618 1.538l.758.757a.75.75 0 1 1-1.061 1.06l-.757-.756a3.02 3.02 0 0 1-4.558-2.6m4.093 1.078c.28-.285.445-.662.445-1.079a1.52 1.52 0 1 0-1.519 1.52c.422 0 .8-.17 1.075-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperSearchOutline;
