import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogecoinBold = ({
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
      d="M12.409 9.43h-1.802v1.82h1.592a.75.75 0 0 1 0 1.5h-1.592v1.82h1.802A2.57 2.57 0 0 0 14.977 12a2.57 2.57 0 0 0-2.568-2.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.409 16.07H9.857a.75.75 0 0 1-.75-.75v-2.57h-.443a.75.75 0 0 1 0-1.5h.443V8.68a.75.75 0 0 1 .75-.75h2.552A4.074 4.074 0 0 1 16.477 12a4.074 4.074 0 0 1-4.068 4.07M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDogecoinBold;
