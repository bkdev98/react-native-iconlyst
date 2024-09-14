import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationForwardOutline = ({
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
      d="M17.14 21.747q-.249 0-.493-.048l-4.137-.8h-.52l-4.139.8a2.494 2.494 0 0 1-2.132-4.31l4.44-3.946a3.15 3.15 0 0 1 4.181 0l4.44 3.947a2.494 2.494 0 0 1-1.64 4.357m-4.89-7.6c-.403 0-.793.148-1.095.416L6.716 18.51a.992.992 0 0 0 .848 1.716l4.21-.82a1 1 0 0 1 .143-.012h.665q.072 0 .143.013l4.21.819a.992.992 0 0 0 .848-1.716l-4.439-3.947a1.64 1.64 0 0 0-1.093-.415zM14.927 5.803a.75.75 0 0 1-.455-.155l-2.222-1.7-2.222 1.7a.75.75 0 1 1-.912-1.191l2.678-2.053a.755.755 0 0 1 .913 0l2.677 2.053a.75.75 0 0 1-.457 1.346"
    />
    <Path
      fill={props.color}
      d="M12.252 10.342a.75.75 0 0 1-.75-.75V3a.75.75 0 1 1 1.5 0v6.592a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystNavigationForwardOutline;
