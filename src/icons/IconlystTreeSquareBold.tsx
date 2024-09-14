import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.833 12.574a.5.5 0 0 1-.451.283h-1.07l1.013 1.755a.502.502 0 0 1-.433.75H12.75v1.753a.75.75 0 0 1-1.5 0v-1.753H9.107a.502.502 0 0 1-.433-.75l1.013-1.755h-1.07a.499.499 0 0 1-.391-.811l3.382-4.243a.52.52 0 0 1 .783 0l3.382 4.243c.12.15.143.355.06.528m.383-9.459H7.782c-3.16 0-5.282 2.22-5.282 5.526v7.947c0 3.306 2.122 5.527 5.282 5.527h8.433c3.161 0 5.285-2.22 5.285-5.527V8.641c0-3.306-2.124-5.526-5.284-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeSquareBold;
