import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBulksharp = ({
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
      d="M3.425 22.41h17.65v-11.4H3.425z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.985 2.66v1.72h4.09v5.13H3.425V4.38h3.59v2.83h1V2.66h1.5v1.72h4.97v2.83h1V2.66zM8.895 13.13v1.5h-1.5l-.01-1.5zM8.895 16.72v1.5h-1.5l-.01-1.5zM13.005 18.22v-1.5h-1.51l.01 1.5zM13.005 13.13v1.5h-1.5l-.01-1.5zM17.115 18.22v-1.5h-1.51l.01 1.5zM17.115 13.13v1.5h-1.5l-.01-1.5z"
    />
  </Svg>
);
export default IconlystCalendarBulksharp;
