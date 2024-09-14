import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading1Bold = ({
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
      d="M4.874 7.397c.31 0 .613-.143.81-.41a7.4 7.4 0 0 1 1.195-1.276 1 1 0 0 0-1.29-1.527 9.4 9.4 0 0 0-1.522 1.623 1 1 0 0 0 .807 1.59M21.49 20.29l-3.424-3.42a1.003 1.003 0 0 0-1.364-.046l-.49.429a7.36 7.36 0 0 1-4.014 1.558 7.6 7.6 0 0 1-2.181-.16 1.001 1.001 0 0 0-.443 1.951c.889.202 1.82.27 2.77.203a9.36 9.36 0 0 0 4.959-1.87l2.774 2.77a1 1 0 0 0 1.414-1.415M4.81 14.362a1 1 0 0 0-1.828.811 9.4 9.4 0 0 0 3.266 3.949 1 1 0 1 0 1.133-1.65 7.4 7.4 0 0 1-2.57-3.11M3.313 12.955a1 1 0 0 0 .923-1.071 7.4 7.4 0 0 1 .246-2.504 1 1 0 0 0-1.93-.524 9.4 9.4 0 0 0-.31 3.176 1 1 0 0 0 1.07.923M11.333 4.006a7.37 7.37 0 0 1 5.331 1.97 7.37 7.37 0 0 1 2.375 5.16 7.3 7.3 0 0 1-.553 3.09 1 1 0 1 0 1.848.763 9.25 9.25 0 0 0 .703-3.93 9.36 9.36 0 0 0-3.015-6.552c-1.847-1.708-4.24-2.587-6.767-2.499a1 1 0 0 0-.96 1.038c.02.552.476 1.008 1.038.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoading1Bold;
