import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExplore1Outline = ({
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
      d="M12.251 3.999a8.25 8.25 0 1 0 0 16.498 8.25 8.25 0 0 0 0-16.498m-9.75 8.25c.001-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.75 9.75 0 0 1-9.75 9.748 9.75 9.75 0 0 1-9.75-9.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.499a.75.75 0 0 1 .75.75v1.705a.75.75 0 1 1-1.5 0V3.25a.75.75 0 0 1 .75-.75m-9.75 9.75a.75.75 0 0 1 .75-.75h1.705a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m16.294 0a.75.75 0 0 1 .75-.75h1.706a.75.75 0 0 1 0 1.5h-1.706a.75.75 0 0 1-.75-.75m-6.543 6.544a.75.75 0 0 1 .75.75v1.704a.75.75 0 1 1-1.5 0v-1.704a.75.75 0 0 1 .75-.75M15.908 8.59a.75.75 0 0 1 .185.754l-1.491 4.765a.75.75 0 0 1-.492.492l-4.765 1.491a.75.75 0 0 1-.94-.94l1.492-4.764a.75.75 0 0 1 .492-.492l4.765-1.492a.75.75 0 0 1 .754.186m-4.697 2.62-.946 3.023 3.023-.946.946-3.023z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExplore1Outline;
