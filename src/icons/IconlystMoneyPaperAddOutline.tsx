import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperAddOutline = ({
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
      d="M4.656 6.462c-.4.43-.656 1.074-.656 1.9v7.4c0 .826.256 1.47.656 1.9.395.424.985.7 1.783.7h6.223a.75.75 0 0 1 0 1.5H6.439c-1.168 0-2.172-.417-2.88-1.178-.703-.755-1.059-1.786-1.059-2.923V8.363c0-1.137.356-2.169 1.058-2.923.708-.76 1.712-1.178 2.88-1.178h11.624c1.165 0 2.169.417 2.877 1.177C21.642 6.194 22 7.225 22 8.363v1.998a.75.75 0 0 1-1.5 0V8.363c0-.826-.257-1.47-.658-1.9-.396-.425-.986-.701-1.78-.701H6.438c-.797 0-1.387.276-1.782.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.713 8.514a.75.75 0 0 1 .75-.75h1.403a.75.75 0 0 1 0 1.5H6.463a.75.75 0 0 1-.75-.75M12.248 10.525a1.537 1.537 0 1 0 0 3.075 1.537 1.537 0 0 0 0-3.075m-3.037 1.538a3.037 3.037 0 1 1 6.075 0 3.037 3.037 0 0 1-6.075 0M18.65 13.48a.75.75 0 0 1 .75.75v1.604h1.603a.75.75 0 0 1 0 1.5H19.4v1.602a.75.75 0 0 1-1.5.001v-1.604h-1.604a.75.75 0 0 1 0-1.5H17.9v-1.602a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperAddOutline;
