import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettings2Broken = ({
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
      d="M11.85 20.145H8.88c-.995 0-1.915-.53-2.412-1.391l-3.095-5.362a2.79 2.79 0 0 1 0-2.784L4.92 7.927M19.308 8.412 17.48 5.246a2.78 2.78 0 0 0-2.41-1.391H8.878c-.994 0-1.914.53-2.411 1.391M17.485 13.08a2.97 2.97 0 1 0 2.28 1.066m-.259 4.08 1.495 1.49M10.111 14.028a2.72 2.72 0 0 1-.894-2.029 2.76 2.76 0 0 1 2.756-2.756c.803 0 1.531.341 2.03.894"
    />
  </Svg>
);
export default IconlystSearchSettings2Broken;
