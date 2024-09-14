import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize6Light = ({
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
      d="M9.003 14.996 5 18.999m4.003-4.003-3.678.008m3.678-.008-.009 3.677M14.997 15 19 19.002m-3.996-.325L14.996 15l3.677.008M9.003 9.003 5 5m3.996.325.008 3.677-3.677-.008M14.996 9.003 19 5m-4.003 4.003 3.678-.008m-3.678.008.01-3.677"
    />
  </Svg>
);
export default IconlystResize6Light;
