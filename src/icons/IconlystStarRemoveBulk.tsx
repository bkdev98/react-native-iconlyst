import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRemoveBulk = ({
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
      d="M20.298 4.892a.754.754 0 0 0-1.06 0l-3.46 3.45-1.73-3.48c-.17-.33-.44-.6-.74-.74-.42-.22-.89-.26-1.33-.12s-.81.44-1.02.87l-1.84 3.65c-.1.21-.31.36-.55.38l-4.09.6c-.37.05-.73.23-1 .5-.32.33-.49.76-.48 1.22s.2.89.52 1.2l2.97 2.86c.17.15.24.39.2.61l-.32 1.86-2.42 2.42c-.3.29-.3.77 0 1.06.14.15.34.22.53.22s.38-.07.53-.22l15.29-15.28c.29-.29.29-.77 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.518 9.502-.95-.14a.45.45 0 0 0-.42.14l-11.46 11.38c-.18.18-.2.45-.06.65s.4.27.62.16l3.91-1.87c.22-.11.47-.11.69 0l3.64 1.89c.25.13.52.2.81.2.09 0 .19 0 .28-.02.94-.15 1.58-1.04 1.43-1.99l-.7-4.01c-.04-.23.04-.46.21-.63l2.96-2.84c.27-.27.46-.62.51-1 .12-.94-.54-1.8-1.47-1.92"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarRemoveBulk;
