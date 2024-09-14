import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DayReturnGuaranteeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.355 5.03c3.079-1.91 6.999-1.496 9.634.76l-.557.561a.75.75 0 0 0 .445 1.274l2.434.283a.746.746 0 0 0 .609-.207.75.75 0 0 0 .225-.602l-.216-2.518a.749.749 0 0 0-1.28-.465l-.604.61c-3.118-2.729-7.805-3.25-11.481-.97a9.68 9.68 0 0 0-4.56 7.744.75.75 0 0 0 .712.786l.038.001a.75.75 0 0 0 .748-.713A8.18 8.18 0 0 1 8.355 5.03M21.784 11.71a.75.75 0 0 0-.786.713 8.17 8.17 0 0 1-3.852 6.544c-3.08 1.909-7 1.494-9.634-.76l.557-.562a.75.75 0 0 0-.445-1.273l-2.434-.284a.754.754 0 0 0-.834.81l.216 2.518a.75.75 0 0 0 1.28.464l.604-.61a9.78 9.78 0 0 0 6.422 2.408 9.6 9.6 0 0 0 5.06-1.436 9.67 9.67 0 0 0 4.558-7.745.75.75 0 0 0-.712-.786" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.986 14.075a.97.97 0 0 1-.693-.288.75.75 0 0 0-1.065 1.058c.47.471 1.093.73 1.758.73a2.482 2.482 0 0 0 1.281-4.607l1.04-1.289a.751.751 0 0 0-.585-1.22h-3.02a.75.75 0 0 0 0 1.5h1.452l-.752.931a.751.751 0 0 0 .584 1.221.983.983 0 0 1 0 1.964M15.076 9.209v5.411a.75.75 0 0 0 1.5 0V9.209a.75.75 0 0 0-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst31DayReturnGuaranteeBulk;
