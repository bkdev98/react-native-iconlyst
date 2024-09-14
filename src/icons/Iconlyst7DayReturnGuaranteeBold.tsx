import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7DayReturnGuaranteeBold = ({
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
      d="M12.559 16.073a.75.75 0 0 0 .938-.494l1.778-5.726a.75.75 0 0 0-.716-.972h-3.61a.75.75 0 0 0 0 1.5h2.59l-1.473 4.754a.75.75 0 0 0 .493.938"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.355 5.03c3.078-1.91 7-1.496 9.634.76l-.558.561a.752.752 0 0 0 .445 1.274l2.434.283a.748.748 0 0 0 .834-.809l-.215-2.518a.75.75 0 0 0-1.28-.465l-.604.61c-3.118-2.729-7.804-3.25-11.481-.97a9.67 9.67 0 0 0-4.56 7.744.75.75 0 0 0 .712.786l.038.001a.75.75 0 0 0 .748-.714A8.18 8.18 0 0 1 8.355 5.03M21.784 11.71a.75.75 0 0 0-.786.713 8.17 8.17 0 0 1-3.853 6.544c-3.077 1.909-6.999 1.495-9.634-.76l.558-.562a.75.75 0 0 0-.445-1.273l-2.434-.284a.75.75 0 0 0-.834.81l.215 2.518a.751.751 0 0 0 1.28.464l.605-.61a9.77 9.77 0 0 0 6.42 2.409 9.57 9.57 0 0 0 5.06-1.437 9.67 9.67 0 0 0 4.56-7.745.75.75 0 0 0-.712-.786"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst7DayReturnGuaranteeBold;
