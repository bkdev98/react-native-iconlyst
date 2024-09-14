import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunBrightnessVerticalOutline = ({
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
      d="M19.903 12a.75.75 0 0 1-.75.75h-1.372a.75.75 0 0 1 0-1.5h1.372a.75.75 0 0 1 .75.75m-2.855 6.894a.75.75 0 0 1-1.06 0l-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97a.75.75 0 0 1 0 1.06m0-13.788a.75.75 0 0 1 0 1.06l-.97.97a.75.75 0 0 1-1.061-1.06l.97-.97a.75.75 0 0 1 1.06 0M10.152 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.599 12a3.445 3.445 0 1 0-6.891 0 3.445 3.445 0 0 0 6.89 0m-3.446-4.945a4.945 4.945 0 1 1 0 9.89 4.945 4.945 0 0 1 0-9.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunBrightnessVerticalOutline;
