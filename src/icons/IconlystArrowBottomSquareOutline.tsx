import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowBottomSquareOutline = ({
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
      d="M12 21.75a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-1.5 0v13c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.53 17.47a.75.75 0 0 0-1.06 0L12 19.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06M10.5 2.25h3c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 8.75 7V4c0-.966.784-1.75 1.75-1.75m3 1.5h-3a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowBottomSquareOutline;
