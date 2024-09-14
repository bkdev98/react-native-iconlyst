import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3Light = ({
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
      d="m5.324 15.002 2.673-.006A1 1 0 0 1 9 15.998l-.007 2.673M18.673 8.993 16 9a1 1 0 0 1-1.002-1.002l.006-2.673M5.01 8.675l-.006-2.673A1 1 0 0 1 6.006 5l2.673.006M18.991 15.32l.006 2.673a1 1 0 0 1-1.002 1.002l-2.673-.006M15.44 8.56 19 5M8.499 15.499 5 18.997"
    />
  </Svg>
);
export default IconlystResize3Light;
