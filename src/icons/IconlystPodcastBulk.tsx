import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPodcastBulk = ({
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
      d="M12.57 2.5c-5.239 0-9.5 4.261-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.568 14.885a2.89 2.89 0 0 1-2.886-2.886 2.89 2.89 0 0 1 2.886-2.887 2.89 2.89 0 0 1 2.886 2.887 2.89 2.89 0 0 1-2.886 2.886m-1.386-2.887c0-.764.622-1.386 1.386-1.386s1.386.622 1.386 1.386c0 .765-.622 1.387-1.386 1.387a1.39 1.39 0 0 1-1.386-1.387"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.825 15.231a.75.75 0 1 1-1.133.982 6.42 6.42 0 0 1 0-8.43.75.75 0 0 1 1.133.983 4.87 4.87 0 0 0-1.209 3.241c0 1.18.43 2.325 1.209 3.224M17.447 16.215a.75.75 0 0 1-1.058.076.75.75 0 0 1-.076-1.058 4.93 4.93 0 0 0 1.209-3.224c0-1.209-.418-2.33-1.208-3.241a.75.75 0 1 1 1.133-.983 6.425 6.425 0 0 1 0 8.43"
    />
  </Svg>
);
export default IconlystPodcastBulk;
