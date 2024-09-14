import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdBold = ({
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
      d="M12 2C7.785 2 4.356 5.427 4.356 9.64v4.69c0 .323.021.656.062.969a.996.996 0 0 0 1.12.862.997.997 0 0 0 .862-1.12 6 6 0 0 1-.044-.711V9.64C6.356 6.53 8.888 4 12 4a5.65 5.65 0 0 1 5.644 5.64v4.69c0 .327-.029.653-.078.937-.173.838-.433 1.534-.776 2.073a5.6 5.6 0 0 1-.885 1.085 1.001 1.001 0 0 0 1.379 1.449 7.6 7.6 0 0 0 1.197-1.467c.476-.748.818-1.642 1.05-2.765.074-.428.113-.87.113-1.312V9.64C19.644 5.427 16.215 2 12 2M13.193 19.867a5.613 5.613 0 0 1-5.98-2.526 1 1 0 1 0-1.698 1.058 7.6 7.6 0 0 0 6.486 3.6c.583 0 1.14-.063 1.66-.187a1.001 1.001 0 0 0-.468-1.945"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.435 10.13a4.46 4.46 0 0 0-1.171-3.004 1 1 0 1 0-1.478 1.346c.424.467.649 1.04.649 1.657v3.74a2.44 2.44 0 0 1-2.437 2.44 2.44 2.44 0 0 1-2.435-2.44 1 1 0 1 0-2 0c0 2.448 1.99 4.44 4.436 4.44a4.443 4.443 0 0 0 4.435-4.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 5.69a4.443 4.443 0 0 0-4.437 4.44v.94a.999.999 0 1 0 1.999 0v-.94A2.44 2.44 0 0 1 12 7.69a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.997 9.04a1 1 0 0 0-1 1v3.93a1 1 0 1 0 2 0v-3.93a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdBold;
