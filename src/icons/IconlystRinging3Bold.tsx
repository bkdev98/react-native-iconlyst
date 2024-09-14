import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging3Bold = ({
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
      d="M11.999 20.249a2.13 2.13 0 0 1-2.126-2.106h4.25A2.13 2.13 0 0 1 12 20.249m7.02-6.761a4.4 4.4 0 0 1-.42-1.882v-1.224c0-3.384-2.563-6.177-5.85-6.551V3a.75.75 0 0 0-1.5 0v.831c-3.283.374-5.845 3.168-5.845 6.551l-.001 1.224a4.5 4.5 0 0 1-.42 1.882l-.433.92a2.6 2.6 0 0 0 .157 2.518 2.61 2.61 0 0 0 2.212 1.217h1.454a3.63 3.63 0 0 0 3.626 3.606 3.63 3.63 0 0 0 3.625-3.606h1.458c.9 0 1.729-.455 2.21-1.216a2.61 2.61 0 0 0 .16-2.519zM5.118 6.793a6.4 6.4 0 0 1 1.895-2.37.75.75 0 0 0-.922-1.183 7.94 7.94 0 0 0-2.336 2.927.75.75 0 1 0 1.363.626M20.245 6.168a7.94 7.94 0 0 0-2.337-2.927.749.749 0 1 0-.922 1.183 6.4 6.4 0 0 1 1.896 2.37.75.75 0 1 0 1.363-.626"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRinging3Bold;
