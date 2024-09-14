import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettingOutline = ({
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
      d="M17.8 2.25a.75.75 0 0 1 .75.75v.397c.458.125.89.366 1.251.723l.344-.199a.75.75 0 1 1 .752 1.298l-.346.2c.123.473.123.97 0 1.443l.346.2a.75.75 0 1 1-.752 1.298l-.344-.2a2.83 2.83 0 0 1-1.25.724v.398a.75.75 0 1 1-1.5 0v-.398a2.83 2.83 0 0 1-1.253-.723l-.345.2a.75.75 0 1 1-.751-1.299l.346-.2a2.86 2.86 0 0 1 0-1.442l-.347-.2a.75.75 0 1 1 .752-1.299l.344.2a2.83 2.83 0 0 1 1.253-.724V3a.75.75 0 0 1 .75-.75m-.951 2.94a1.344 1.344 0 1 0 1.9 1.9 1.344 1.344 0 0 0-1.9-1.9m-5.208-1.435a.75.75 0 0 1-.652.837 7.302 7.302 0 0 0 .91 14.544 7.27 7.27 0 0 0 5.003-1.985 7.28 7.28 0 0 0 2.235-4.362.75.75 0 0 1 1.487.194 8.77 8.77 0 0 1-2.19 4.746l2.748 2.74a.75.75 0 1 1-1.06 1.062l-2.784-2.777a8.76 8.76 0 0 1-5.44 1.882 8.8 8.8 0 0 1-8.8-8.8c0-4.49 3.362-8.193 7.707-8.733a.75.75 0 0 1 .836.652"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSettingOutline;
