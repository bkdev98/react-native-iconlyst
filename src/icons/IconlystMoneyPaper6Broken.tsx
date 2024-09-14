import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper6Broken = ({
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
      d="M16.803 19.05a3.36 3.36 0 0 1 .783-3.554 3.34 3.34 0 0 1 3.41-.82M3 14.677a3.36 3.36 0 0 1 3.419.819 3.37 3.37 0 0 1 .775 3.554M7.185 4.95a3.35 3.35 0 0 1-.765 3.562 3.36 3.36 0 0 1-3.42.82M16.814 4.95a3.34 3.34 0 0 0 .773 3.562 3.34 3.34 0 0 0 3.411.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.95H6.188C4.228 4.95 3 6.336 3 8.3V15.7c0 1.963 1.223 3.35 3.188 3.35h11.623c1.966 0 3.189-1.387 3.189-3.35V8.3c0-1.963-1.223-3.35-3.188-3.35h-2.906"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.001 14.286a2.288 2.288 0 1 1 2.048-1.266"
    />
  </Svg>
);
export default IconlystMoneyPaper6Broken;
