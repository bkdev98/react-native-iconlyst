import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarOutline = ({
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
      d="M13.704 11.059a.75.75 0 0 1 .75.75v2.839c0 1.469-1.19 2.662-2.66 2.662H10.37a.75.75 0 0 1 0-1.5h1.424c.64 0 1.16-.52 1.16-1.162v-2.84a.75.75 0 0 1 .75-.75M17.17 6.82a.75.75 0 0 1 .75.75v4.508c0 .641.52 1.16 1.16 1.16h1.921a.75.75 0 0 1 0 1.5h-1.92a2.66 2.66 0 0 1-2.661-2.66V7.57a.75.75 0 0 1 .75-.75M9.86 5.535a.75.75 0 0 1 .75.75v6.36a.75.75 0 0 1-1.5 0v-6.36a.75.75 0 0 1 .75-.75M6.334 8.492a.75.75 0 0 1 .75.75v2.84c0 1.469-1.19 2.661-2.66 2.661H3a.75.75 0 0 1 0-1.5h1.423c.641 0 1.161-.52 1.161-1.162V9.242a.75.75 0 0 1 .75-.75M16.234 17.714a.968.968 0 1 1 1.936 0 .968.968 0 0 1-1.936 0M12.675 7.57a.968.968 0 1 1 1.935 0 .968.968 0 0 1-1.935 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBazarOutline;
