import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight2Boldcurved = ({
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
      d="M8.75 20a1 1 0 0 1-.511-1.86c2.626-1.556 6.51-4.583 6.51-6.14 0-1.56-3.883-4.586-6.51-6.14a1 1 0 0 1 1.02-1.72c1.25.74 7.49 4.598 7.49 7.86 0 3.26-6.238 7.12-7.49 7.86a1 1 0 0 1-.508.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight2Boldcurved;
