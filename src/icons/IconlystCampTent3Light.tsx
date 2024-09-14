import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 19.517-2.71-10.55L12 4.483 5.71 8.967 3 19.517"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.65 9.26.058 9.69c-.017.307.21.566.497.566h1.824a.48.48 0 0 0 .405-.221c.6-.918 2.85-3.674 3.565-7.552.714 3.878 2.968 6.635 3.567 7.551a.48.48 0 0 0 .405.222h1.867c.286 0 .514-.258.498-.566l.023-9.816"
    />
  </Svg>
);
export default IconlystCampTent3Light;
