import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3Outline = ({
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
      d="M18.709 19.454H5.29a3.093 3.093 0 0 1-1.185-5.927l5.3-2.243a.75.75 0 0 1 .584 1.382l-5.3 2.242a1.54 1.54 0 0 0-.94 1.42 1.563 1.563 0 0 0 1.54 1.626h13.419a1.54 1.54 0 0 0 .59-2.964l-7.568-3.133a.75.75 0 0 1-.463-.694v-.486a1.98 1.98 0 0 1 1.281-1.843 1.45 1.45 0 0 0 .855-1.772 1.4 1.4 0 0 0-.976-.96 1.46 1.46 0 0 0-1.703.75 1.4 1.4 0 0 0-.148.637.75.75 0 0 1-1.5 0 2.92 2.92 0 0 1 1.15-2.333 2.97 2.97 0 0 1 2.585-.506 2.93 2.93 0 0 1 2.037 2.01 2.96 2.96 0 0 1-1.748 3.57.49.49 0 0 0-.327.434l7.1 2.94a3.04 3.04 0 0 1-1.163 5.85z"
    />
  </Svg>
);
export default IconlystCoatHanger3Outline;
