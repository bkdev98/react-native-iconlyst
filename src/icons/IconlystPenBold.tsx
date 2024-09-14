import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.374 8.942a.64.64 0 0 0-.439-.172h-.025a.64.64 0 0 0-.448.206l-4.43 4.836a1.66 1.66 0 0 0-.413.934l-.115 1.052a.38.38 0 0 0 .12.324.39.39 0 0 0 .332.1l1.018-.17c.377-.062.724-.253.977-.537l4.391-4.792a.65.65 0 0 0-.034-.918z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.446 11.739-4.382 4.78a3.18 3.18 0 0 1-1.844 1.013l-1.016.17a1.87 1.87 0 0 1-1.608-.488 1.87 1.87 0 0 1-.583-1.577l.115-1.051c.07-.665.344-1.282.793-1.782l4.437-4.843a2.13 2.13 0 0 1 1.494-.69 2.1 2.1 0 0 1 1.54.57l.936.864c.867.807.919 2.167.118 3.034m-.229-8.73H7.782c-3.159 0-5.282 2.22-5.282 5.525v7.948c0 3.306 2.123 5.527 5.282 5.527h8.434c3.161 0 5.284-2.221 5.284-5.527V8.534c0-3.305-2.123-5.525-5.283-5.525"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenBold;
