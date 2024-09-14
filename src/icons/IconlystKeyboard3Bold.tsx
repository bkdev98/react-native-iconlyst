import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard3Bold = ({
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
      d="M17.119 9.704a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732m-1.708 2.88a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732m-.588 3.56H9.178a.75.75 0 0 1 0-1.5h5.645a.75.75 0 0 1 0 1.5m-7.11-4.427a.866.866 0 1 1 1.732.002.866.866 0 0 1-1.732-.002M6.87 9.704a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732m3.417-1.732a.866.866 0 1 1 0 1.733.866.866 0 0 1 0-1.733m1.708 2.88a.866.866 0 1 1 0 1.732.866.866 0 0 1 0-1.732m1.708-2.88a.866.866 0 1 1-.001 1.731.866.866 0 0 1 .001-1.731m2.525-3.577H7.771c-3.3 0-5.271 1.934-5.271 5.172v4.874c-.005 1.563.464 2.862 1.356 3.758.917.92 2.268 1.406 3.906 1.406h8.466c3.301 0 5.272-1.93 5.272-5.162v-4.8c0-3.286-1.971-5.248-5.272-5.248"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboard3Bold;
