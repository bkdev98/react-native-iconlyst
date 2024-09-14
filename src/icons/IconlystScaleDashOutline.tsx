import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleDashOutline = ({
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
      d="M8.616 3.918c.746 0 1.35.605 1.35 1.35v3.081A1.35 1.35 0 0 1 8.618 9.7H5.535a1.35 1.35 0 0 1-1.35-1.35V5.268c0-.746.604-1.35 1.35-1.35zm2.85 1.35a2.85 2.85 0 0 0-2.85-2.85H5.535a2.85 2.85 0 0 0-2.85 2.85v3.081a2.85 2.85 0 0 0 2.85 2.85h3.082a2.85 2.85 0 0 0 2.85-2.85zM3.436 12.877a.75.75 0 0 0-.75.75v2.257a.75.75 0 0 0 1.5 0v-2.257a.75.75 0 0 0-.75-.75M21.436 12.877a.75.75 0 0 0-.75.75v2.063a.75.75 0 0 0 1.5 0v-2.063a.75.75 0 0 0-.75-.75M21.436 7.71a.75.75 0 0 0-.75.75v2.249a.75.75 0 0 0 1.5 0V8.46a.75.75 0 0 0-.75-.75M16.902 21.168a.75.75 0 0 0-.75-.75h-2.257a.75.75 0 0 0 0 1.5h2.257a.75.75 0 0 0 .75-.75M16.719 3.168a.75.75 0 0 0-.75-.75h-2.073a.75.75 0 0 0 0 1.5h2.073a.75.75 0 0 0 .75-.75M11.727 21.168a.75.75 0 0 0-.75-.75H8.914a.75.75 0 0 0 0 1.5h2.063a.75.75 0 0 0 .75-.75M21.177 18.05a.75.75 0 0 0-1.001.352 3.27 3.27 0 0 1-1.37 1.468.75.75 0 0 0 .725 1.313 4.77 4.77 0 0 0 1.996-2.131.75.75 0 0 0-.35-1.001M3.747 18.232a.75.75 0 0 0-.3 1.018 4.93 4.93 0 0 0 2.065 2.038.75.75 0 1 0 .691-1.33 3.43 3.43 0 0 1-1.439-1.426.75.75 0 0 0-1.017-.3M18.36 3.36a.75.75 0 0 0 .31 1.015 3.5 3.5 0 0 1 1.445 1.439.75.75 0 1 0 1.317-.718 5 5 0 0 0-2.058-2.045.75.75 0 0 0-1.014.31"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScaleDashOutline;
