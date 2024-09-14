import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowTopSquareOutline = ({
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
      d="M12 2.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.53 6.53a.75.75 0 0 1-1.06 0L12 4.06 9.53 6.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06M10.5 16.75a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25zM8.75 17c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 8.75 20z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowTopSquareOutline;
