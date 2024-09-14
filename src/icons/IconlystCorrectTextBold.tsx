import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCorrectTextBold = ({
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
      d="m17.46 10.61-3.834 3.84a.75.75 0 0 1-1.061.002l-2.034-2.03a.751.751 0 0 1 1.06-1.063l1.503 1.5 3.305-3.31a.751.751 0 0 1 1.062 1.062m.868-5.9H9.202c-.747 0-1.453.318-1.936.872L3.135 10.31a2.57 2.57 0 0 0-.001 3.379l4.132 4.73a2.57 2.57 0 0 0 1.936.87h9.126a3.174 3.174 0 0 0 3.17-3.17V7.88a3.174 3.174 0 0 0-3.17-3.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCorrectTextBold;
