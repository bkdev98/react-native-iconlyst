import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunBold = ({
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
      d="M6.576 7.14a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.061l-.97-.97a.751.751 0 0 0-1.062 1.062zM12.5 5.12a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-1.5 0v1.37c0 .414.336.75.75.75M5.622 12a.75.75 0 0 0-.75-.75H3.5a.75.75 0 0 0 0 1.5h1.372a.75.75 0 0 0 .75-.75M17.894 7.36a.75.75 0 0 0 .53-.22l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.969a.75.75 0 0 0 .53 1.28M18.424 16.86a.751.751 0 0 0-1.061 1.062l.97.968a.75.75 0 0 0 1.062-1.06zM6.576 16.86l-.97.97a.75.75 0 1 0 1.06 1.06l.971-.969a.751.751 0 0 0-1.06-1.062M21.5 11.25h-1.372a.75.75 0 0 0 0 1.5H21.5a.75.75 0 0 0 0-1.5M12.5 18.88a.75.75 0 0 0-.75.75V21a.75.75 0 0 0 1.5 0v-1.37a.75.75 0 0 0-.75-.75M12.5 7.3A4.7 4.7 0 0 0 7.805 12c0 2.592 2.106 4.7 4.695 4.7a4.703 4.703 0 0 0 4.696-4.7c0-2.592-2.106-4.7-4.696-4.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunBold;
