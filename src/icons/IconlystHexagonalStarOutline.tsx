import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalStarOutline = ({
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
      fillRule="evenodd"
      d="M12.614 7a.75.75 0 0 1 .718.531 5.64 5.64 0 0 0 3.75 3.751.75.75 0 0 1 0 1.435 5.64 5.64 0 0 0-3.75 3.751.75.75 0 0 1-1.435 0 5.64 5.64 0 0 0-3.751-3.75.75.75 0 0 1 0-1.436 5.64 5.64 0 0 0 3.75-3.75.75.75 0 0 1 .718-.532m-2.421 5a7.14 7.14 0 0 1 2.421 2.421A7.14 7.14 0 0 1 15.036 12a7.14 7.14 0 0 1-2.422-2.422A7.14 7.14 0 0 1 10.193 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.854 2.472a3.52 3.52 0 0 1 3.522 0l5.61 3.24a3.52 3.52 0 0 1 1.76 3.05v6.477c0 1.259-.67 2.421-1.76 3.05l-5.61 3.24c-1.09.628-2.432.628-3.522 0l-5.61-3.24a3.52 3.52 0 0 1-1.761-3.05V8.761c0-1.258.67-2.42 1.76-3.05zm2.772 1.3a2.02 2.02 0 0 0-2.022 0L5.994 7.01a2.02 2.02 0 0 0-1.011 1.751v6.478c0 .723.385 1.39 1.01 1.751l5.61 3.24a2.02 2.02 0 0 0 2.023 0l5.61-3.24a2.02 2.02 0 0 0 1.01-1.75V8.76c0-.722-.384-1.39-1.01-1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalStarOutline;
