import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerCircleOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.535a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-10 8.5c0-5.524 4.477-10 10-10s10 4.476 10 10c0 5.522-4.478 10-10 10s-10-4.478-10-10"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.995 8.489v5.919h-1.5v-5.92zM11.495 16.08h1.51v1.5h-1.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDangerCircleOutlinesharp;
