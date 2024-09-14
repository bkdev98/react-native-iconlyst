import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowCircleOutline = ({
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
      d="M12.614 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.584 6.429a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 0 1 1.06 1.06l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 0-1.06M10.584 17.317a.75.75 0 0 0 1.06 0l.97-.97.97.97a.75.75 0 0 0 1.06-1.061l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M16.424 16.48a.75.75 0 0 0 .53-.918l-.355-1.325 1.325-.355a.75.75 0 1 0-.389-1.449l-2.049.55a.75.75 0 0 0-.53.918l.549 2.049a.75.75 0 0 0 .918.53M6.995 11.036a.75.75 0 0 1 .53-.918l1.325-.355-.355-1.325a.75.75 0 0 1 1.45-.388l.548 2.05a.75.75 0 0 1-.53.918l-2.05.549a.75.75 0 0 1-.918-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.46 15.311a.75.75 0 0 0-.275-1.024l-10.392-6a.75.75 0 1 0-.75 1.299l10.392 6a.75.75 0 0 0 1.025-.275M16.424 7.52a.75.75 0 0 1 .53.918l-.355 1.325 1.325.355a.75.75 0 1 1-.389 1.449l-2.049-.55a.75.75 0 0 1-.53-.918l.549-2.049a.75.75 0 0 1 .918-.53M6.995 12.964a.75.75 0 0 0 .53.918l1.325.355-.355 1.325a.75.75 0 1 0 1.45.388l.548-2.05a.75.75 0 0 0-.53-.918l-2.05-.549a.75.75 0 0 0-.918.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.46 8.689a.75.75 0 0 1-.275 1.024l-10.392 6a.75.75 0 0 1-.75-1.299l10.392-6a.75.75 0 0 1 1.025.275"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowCircleOutline;
