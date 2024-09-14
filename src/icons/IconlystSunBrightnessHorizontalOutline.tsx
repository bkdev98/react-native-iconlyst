import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunBrightnessHorizontalOutline = ({
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
      d="M12.555 4.652a.75.75 0 0 1 .75.75v1.372a.75.75 0 0 1-1.5 0V5.402a.75.75 0 0 1 .75-.75m6.894 2.855a.75.75 0 0 1 0 1.061l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97a.75.75 0 0 1 1.06 0m-13.788 0a.75.75 0 0 1 1.06 0l.97.97a.75.75 0 0 1-1.06 1.062l-.97-.97a.75.75 0 0 1 0-1.061m-2.856 6.895a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.555 10.957a3.446 3.446 0 1 0 0 6.89 3.446 3.446 0 0 0 0-6.89m-4.946 3.445a4.945 4.945 0 1 1 9.891 0 4.945 4.945 0 0 1-9.89 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunBrightnessHorizontalOutline;
