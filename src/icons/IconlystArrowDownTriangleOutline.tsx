import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownTriangleOutline = ({
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
      fillRule="evenodd"
      d="M12 3.25a.75.75 0 0 1 .75.75v7.73h3.986a.75.75 0 0 1 .635 1.15l-4.737 7.52a.75.75 0 0 1-1.27 0l-4.737-7.52a.75.75 0 0 1 .635-1.15h3.988V4a.75.75 0 0 1 .75-.75m-.03 9.98H8.62L12 18.591l3.378-5.363H11.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownTriangleOutline;
