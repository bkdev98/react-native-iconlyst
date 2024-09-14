import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserDeleteBulk = ({
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
      d="M12.15 21.751c-5.376 0-9.75-4.374-9.75-9.75 0-5.779 5.047-10.41 10.963-9.674a.75.75 0 0 1 .651.837.755.755 0 0 1-.837.651C8.155 3.2 3.9 7.111 3.9 12.001c0 4.55 3.701 8.25 8.25 8.25 4.55 0 8.25-3.7 8.25-8.25 0-.248-.008-.495-.035-.738a.75.75 0 0 1 .662-.828c.41-.038.782.25.828.662.033.298.045.6.045.904 0 5.376-4.374 9.75-9.75 9.75"
    />
    <Path
      fill={props.color}
      d="M20.43 8.25a.75.75 0 0 1-.53-.22l-1.112-1.11-1.077 1.077a.749.749 0 1 1-1.06-1.06l1.076-1.078-1.116-1.114a.749.749 0 1 1 1.06-1.06l1.116 1.114 1.083-1.083a.75.75 0 0 1 1.06 1.06L19.85 5.859l1.112 1.11a.749.749 0 0 1-.53 1.28"
    />
    <Path
      fill={props.color}
      d="M16.91 18.739a8.04 8.04 0 0 1-4.77 1.562 8.04 8.04 0 0 1-4.75-1.548c.563-1.39 2.095-2.526 4.762-2.526 2.663 0 4.194 1.13 4.759 2.512"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.322 12.022a3.167 3.167 0 0 1-3.163 3.163 3.167 3.167 0 0 1-3.163-3.163A3.166 3.166 0 0 1 12.16 8.86a3.166 3.166 0 0 1 3.163 3.163"
    />
  </Svg>
);
export default IconlystUserDeleteBulk;
