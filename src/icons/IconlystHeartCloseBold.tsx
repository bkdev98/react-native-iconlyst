import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCloseBold = ({
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
      d="M14.162 12.45a.751.751 0 0 1-1.062 1.062l-1.107-1.11-1.107 1.11a.751.751 0 0 1-1.062-1.062l1.109-1.11-1.11-1.11a.75.75 0 0 1 1.063-1.06l1.107 1.108L13.1 9.17a.75.75 0 0 1 1.062 1.06l-1.11 1.11zm6.823-5.474c-.68-1.679-1.993-2.906-3.695-3.452a6.1 6.1 0 0 0-2.911-.207c-.892.15-1.701.685-2.382 1.182-.656-.477-1.486-1.022-2.382-1.172a6.3 6.3 0 0 0-2.91.197c-3.73 1.207-4.877 5.29-3.835 8.535 1.624 5.21 8.62 8.526 8.917 8.664a.49.49 0 0 0 .422 0c.292-.136 7.184-3.39 8.906-8.66.55-1.716.504-3.522-.13-5.087"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCloseBold;
