import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraterTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.764 6.688h7.472a2.31 2.31 0 0 1 2.297 2.055l1.077 9.69A2.31 2.31 0 0 1 17.313 21H7.687a2.31 2.31 0 0 1-2.297-2.567l1.076-9.69a2.31 2.31 0 0 1 2.298-2.055"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.45 16.056h.05m-1.714 2.212h.05m4.924-2.212h.051m-3.362-4.425h.05m-1.713 2.213h.05m4.924-2.213h.051M10.786 9.42h.05M9.14 16.056h.05m-.05-4.425h.05m4.917 6.637h.068m-.068-4.424h.068m-.068-4.425h.068M8.979 6.688l.252-2.03C9.346 3.623 10.22 3 11.263 3h2.474c1.042 0 1.917.623 2.033 1.658l.252 2.03"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGraterTwoTone;
