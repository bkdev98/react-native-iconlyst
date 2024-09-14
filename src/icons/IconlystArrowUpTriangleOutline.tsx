import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpTriangleOutline = ({
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
      d="M12 3.25a.75.75 0 0 1 .634.35l4.737 7.52a.75.75 0 0 1-.634 1.15H12.75V20a.75.75 0 0 1-1.5 0v-7.73H7.262a.75.75 0 0 1-.635-1.15l4.738-7.52a.75.75 0 0 1 .634-.35m.03 7.52H8.62L12 5.407l3.378 5.363z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpTriangleOutline;
