import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCheckBold = ({
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
      d="M19.076 3.663c-.075 0-.14.05-.165.12-.12.342-.315.661-.585.931l-4.425 4.427a2.5 2.5 0 0 1-1.768.732h-.001c-.663 0-1.3-.264-1.769-.733L8.216 6.99a2.5 2.5 0 0 1-.667-2.329q.058-.248.165-.47c.108-.228-.04-.528-.292-.528h-.537a3.19 3.19 0 0 0-3.186 3.184v2.05c0 1.141.444 2.214 1.273 3.041l4.345 3.867c.194.193.304.462.304.735v3.225a2.037 2.037 0 0 0 2.793 1.893l1.882-.748a2.03 2.03 0 0 0 1.286-1.894v-1.99c0-.294.125-.575.36-.787l4.907-4.855a4.28 4.28 0 0 0 1.413-3.173V6.847a3.19 3.19 0 0 0-3.186-3.184"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.602 7.903a.75.75 0 0 0 1.061 0l4.424-4.426a.75.75 0 0 0-1.06-1.061L12.345 6.1a.3.3 0 0 1-.425 0l-1.405-1.407a.749.749 0 1 0-1.06 1.059z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterCheckBold;
