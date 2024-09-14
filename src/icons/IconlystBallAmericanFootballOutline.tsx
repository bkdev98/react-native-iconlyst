import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallAmericanFootballOutline = ({
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
      d="M7.156 21.744a5.24 5.24 0 0 1-3.731-1.206c-1.118-1.127-1.241-3.027-1.148-4.423a14.93 14.93 0 0 1 13.8-13.844c1.41-.1 3.333.025 4.476 1.168s1.265 3.062 1.168 4.47A14.926 14.926 0 0 1 7.873 21.72c-.226.016-.468.025-.717.025m9.675-18a10 10 0 0 0-.646.023A13.425 13.425 0 0 0 3.773 16.214a4.38 4.38 0 0 0 .716 3.267 4.34 4.34 0 0 0 3.287.742A13.42 13.42 0 0 0 20.228 7.806a4.38 4.38 0 0 0-.733-3.307 3.85 3.85 0 0 0-2.664-.755"
    />
    <Path
      fill={props.color}
      d="M8.043 21.7a.75.75 0 0 1-.75-.75 4.247 4.247 0 0 0-4.243-4.243.75.75 0 1 1 0-1.5 5.75 5.75 0 0 1 5.743 5.743.75.75 0 0 1-.75.75M20.95 8.797a5.75 5.75 0 0 1-5.748-5.747.75.75 0 0 1 1.5 0 4.25 4.25 0 0 0 4.248 4.247.75.75 0 1 1 0 1.5M9.35 15.405a.75.75 0 0 1-.53-1.281l5.057-5.06a.75.75 0 0 1 1.061 1.062L9.88 15.185a.75.75 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M14.129 13.128a.75.75 0 0 1-.53-.22l-2.511-2.511a.75.75 0 1 1 1.06-1.061l2.51 2.511a.75.75 0 0 1-.53 1.281M12.127 15.128a.75.75 0 0 1-.53-.22l-2.511-2.511a.75.75 0 0 1 1.061-1.061l2.51 2.511a.751.751 0 0 1-.53 1.281"
    />
  </Svg>
);
export default IconlystBallAmericanFootballOutline;
