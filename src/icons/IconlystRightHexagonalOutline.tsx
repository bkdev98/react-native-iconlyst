import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightHexagonalOutline = ({
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
      d="M12.309 8.452a.75.75 0 0 0 .002 1.06l1.744 1.736H8.13a.75.75 0 0 0 0 1.5h5.926l-1.745 1.74a.75.75 0 1 0 1.059 1.063l3.03-3.022a.75.75 0 0 0 0-1.062L13.37 8.45a.75.75 0 0 0-1.061.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.592 2.677 5.686 3.282a3.19 3.19 0 0 1 1.593 2.759v6.564c0 1.138-.607 2.19-1.592 2.758l-5.687 3.283c-.985.57-2.199.57-3.184 0L4.722 18.04a3.19 3.19 0 0 1-1.593-2.758V8.718c0-1.138.607-2.19 1.593-2.76l5.686-3.281a3.19 3.19 0 0 1 3.184 0m-.75 1.299c-.52-.301-1.163-.301-1.684 0L5.472 7.258c-.521.3-.843.857-.843 1.46v6.564c0 .602.322 1.158.843 1.46l5.686 3.282c.52.301 1.163.301 1.684 0l5.686-3.283c.521-.3.843-.857.843-1.459V8.718c0-.603-.322-1.16-.843-1.46z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightHexagonalOutline;
