import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye3Bold = ({
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
      d="M20.908 12.317C19.262 8.748 15.848 6.531 12 6.531c-3.849 0-7.263 2.217-8.908 5.786a1 1 0 1 0 1.816.838C6.223 10.302 8.94 8.531 12 8.531s5.776 1.771 7.092 4.624a1 1 0 1 0 1.816-.838"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.003 10.836a3.314 3.314 0 0 0 0 6.63 3.315 3.315 0 0 0 0-6.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEye3Bold;
