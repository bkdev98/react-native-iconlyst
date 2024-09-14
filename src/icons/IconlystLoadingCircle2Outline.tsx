import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle2Outline = ({
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
      d="M3.138 12.699a.75.75 0 0 1 .854.629c.087.573.244 1.135.447 1.666a.75.75 0 0 1-1.4.537 9.6 9.6 0 0 1-.53-1.978.75.75 0 0 1 .629-.854M4.1 7.86a.75.75 0 0 1 .405.98 7.8 7.8 0 0 0-.498 1.793.75.75 0 0 1-1.482-.23 9.3 9.3 0 0 1 .595-2.139.75.75 0 0 1 .98-.405M7.07 4.456a.75.75 0 0 1-.101 1.056c-.41.338-.787.707-1.106 1.097a.75.75 0 1 1-1.16-.952c.39-.475.838-.911 1.31-1.301a.75.75 0 0 1 1.056.1M11.548 2.893a.75.75 0 0 1-.629.854 7.5 7.5 0 0 0-1.656.444.75.75 0 0 1-.557-1.392 9 9 0 0 1 1.988-.535.75.75 0 0 1 .854.63M12.943 2.89a.75.75 0 0 1 .857-.624 9.7 9.7 0 0 1 1.714.433l.005.002c5.096 1.842 7.736 7.466 5.895 12.562-1.841 5.097-7.466 7.736-12.562 5.896a9.8 9.8 0 0 1-3.078-1.799 8.4 8.4 0 0 1-1.166-1.19.75.75 0 0 1 1.171-.937q.42.527.961.98l.01.008a8.313 8.313 0 1 0 8.263-14.108 8 8 0 0 0-1.447-.365.75.75 0 0 1-.623-.858"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle2Outline;
