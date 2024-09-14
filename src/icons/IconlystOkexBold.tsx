import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOkexBold = ({
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
      d="M15.963 16.917a5.04 5.04 0 0 1-3.748-3.763L12 12.233l-.215.921a5.04 5.04 0 0 1-3.748 3.763l-1.215.281.272-1.217a5 5 0 0 1 3.756-3.768l.905-.203-.911-.213a5.02 5.02 0 0 1-3.75-3.778l-.27-1.215 1.213.28a5.03 5.03 0 0 1 3.75 3.778l.213.955.213-.955a5.03 5.03 0 0 1 3.75-3.778l1.213-.28-.27 1.215a5.02 5.02 0 0 1-3.75 3.779l-.911.212.905.203a5 5 0 0 1 3.756 3.768l.272 1.217zM17.2 6.81A5.256 5.256 0 0 0 12 2.25c-2.66 0-4.87 2-5.2 4.56A5.244 5.244 0 0 0 2.25 12c0 2.66 1.99 4.86 4.55 5.19a5.25 5.25 0 0 0 5.2 4.56c2.66 0 4.87-1.99 5.2-4.56A5.24 5.24 0 0 0 21.75 12c0-2.65-1.99-4.86-4.55-5.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOkexBold;
