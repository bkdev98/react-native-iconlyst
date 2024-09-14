import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Bulkcurved = ({
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
      d="M17.339 11.188c-.535.536-2.347.721-4.092.771l-2 .006c-2.237-.053-3.607-.313-4.071-.777-.563-.564-.274-1.504.04-2.26.65-1.569 3.397-6.105 5.042-6.105 1.695 0 4.432 4.738 5.029 6.177.325.782.585 1.653.052 2.188"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.247 11.96v8.217a1 1 0 1 1-2 0v-8.211z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystArrowUp3Bulkcurved;
