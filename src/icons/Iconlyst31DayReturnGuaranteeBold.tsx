import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DayReturnGuaranteeBold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.987 14.076a.97.97 0 0 1-.694-.288.75.75 0 0 0-1.064 1.058c.469.471 1.093.73 1.758.73a2.482 2.482 0 0 0 1.281-4.607l1.038-1.289a.751.751 0 0 0-.583-1.22H9.702a.75.75 0 0 0 0 1.5h1.453l-.752.931a.751.751 0 0 0 .584 1.221.983.983 0 0 1 0 1.964M15.076 9.21v5.41a.75.75 0 0 0 1.5 0V9.21a.75.75 0 0 0-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.355 5.03c3.079-1.91 6.999-1.495 9.634.761l-.557.561a.75.75 0 0 0 .445 1.274l2.434.283a.746.746 0 0 0 .609-.207.75.75 0 0 0 .225-.602l-.216-2.518a.749.749 0 0 0-1.28-.465l-.604.61c-3.118-2.729-7.805-3.25-11.481-.97a9.68 9.68 0 0 0-4.56 7.744.75.75 0 0 0 .712.786l.038.001a.75.75 0 0 0 .748-.713A8.18 8.18 0 0 1 8.355 5.03M21.784 11.712a.75.75 0 0 0-.786.712 8.17 8.17 0 0 1-3.852 6.544c-3.08 1.909-7 1.494-9.634-.76l.557-.562a.75.75 0 0 0-.445-1.273l-2.434-.284a.754.754 0 0 0-.834.81l.216 2.518a.75.75 0 0 0 1.28.464l.604-.61a9.78 9.78 0 0 0 6.422 2.408 9.6 9.6 0 0 0 5.06-1.436 9.67 9.67 0 0 0 4.558-7.745.75.75 0 0 0-.712-.786"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst31DayReturnGuaranteeBold;
