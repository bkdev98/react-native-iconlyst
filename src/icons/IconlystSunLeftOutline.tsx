import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunLeftOutline = ({
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
      d="M12.855 8.414a3.585 3.585 0 1 1 0 7.17 3.585 3.585 0 0 1 0-7.17M17.94 12a5.085 5.085 0 1 0-10.17 0 5.085 5.085 0 0 0 10.17 0M5.749 4.893a.75.75 0 0 0 0 1.06L6.75 6.957a.75.75 0 0 0 1.06-1.06L6.81 4.892a.75.75 0 0 0-1.06 0M5.723 12a.75.75 0 0 0-.75-.75H3.555a.75.75 0 0 0 0 1.5h1.418a.75.75 0 0 0 .75-.75m2.084 5.038a.75.75 0 0 0-1.061.01l-.773.787a.75.75 0 0 0 1.07 1.051l.774-.788a.75.75 0 0 0-.01-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.576 3.77A8.23 8.23 0 0 1 20.805 12a8.23 8.23 0 0 1-8.229 8.23.75.75 0 1 0 0 1.5c5.375 0 9.729-4.356 9.729-9.73 0-5.372-4.355-9.728-9.729-9.728a.75.75 0 1 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunLeftOutline;
