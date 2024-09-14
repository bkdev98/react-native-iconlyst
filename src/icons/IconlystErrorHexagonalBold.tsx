import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorHexagonalBold = ({
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
      d="M12.75 11.999a.75.75 0 0 1-1.5 0V8.107a.75.75 0 0 1 1.5 0zM12 16.467c-.414 0-.75-.312-.75-.726v-.048a.75.75 0 0 1 1.5 0c0 .414-.336.774-.75.774m8.692-9.207-3.951-3.95a2.73 2.73 0 0 0-1.951-.81H9.21c-.728 0-1.439.295-1.95.809L3.309 7.26A2.77 2.77 0 0 0 2.5 9.209v5.581c0 .728.295 1.438.809 1.951l3.951 3.951a2.77 2.77 0 0 0 1.95.808h5.58c.738 0 1.431-.287 1.95-.808l3.952-3.951a2.78 2.78 0 0 0 .808-1.951V9.209c0-.737-.287-1.43-.808-1.949"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorHexagonalBold;
