import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagPinBold = ({
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
      d="M15.594 13.037a.75.75 0 0 0-.264 1.477c3.141.56 4.786 1.792 4.786 2.719 0 1.425-3.468 3.017-8.11 3.017-4.648 0-8.121-1.592-8.121-3.017 0-.921 1.645-2.151 4.788-2.72a.75.75 0 0 0-.267-1.476c-3.714.673-6.021 2.28-6.021 4.196 0 2.575 4.136 4.517 9.62 4.517 5.48 0 9.61-1.942 9.61-4.517 0-1.925-2.306-3.533-6.021-4.196"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 17.46a.75.75 0 0 0 .75-.75v-6.38l6.772-3.226a.75.75 0 0 0 0-1.354l-7.2-3.427A.75.75 0 0 0 11.249 3v13.71c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlagPinBold;
