import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeft2Broken = ({
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
      d="M16.265 19.64c-2.179 1.288-5.138 1.867-6.867.82-1.665-1.008-3.186-2.414-4.31-3.76-.605-.721-.49-1.778.221-2.396a1.8 1.8 0 0 1 2.228-.108l1.695 1.206-3.237-8.894a1.65 1.65 0 0 1 3.092-1.152l1.523 3.989c2.245-.583 5.346-1.84 7.086.21 1.75 2.062 2.028 5.532 1.044 7.643M13.446 3l-1.258 1.703 1.702 1.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.189 4.704c2.395-.609 4.665-.68 6.468.593"
    />
  </Svg>
);
export default IconlystSwipeLeft2Broken;
