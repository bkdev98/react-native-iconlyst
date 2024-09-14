import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlovesLight = ({
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
      d="m4.953 11.237-1.477 1.552a1.295 1.295 0 0 0 .046 1.832l6.33 6.022a1.296 1.296 0 0 0 1.833-.046l7.637-8.029a5.664 5.664 0 1 0-8.21-7.807l-1.78 1.874.001-1.341a2.247 2.247 0 1 0-4.49.128l.312 5.26a.74.74 0 0 1-.202.555M4.81 11.385l8.21 7.808"
    />
  </Svg>
);
export default IconlystGlovesLight;
