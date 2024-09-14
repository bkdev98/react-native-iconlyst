import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitDownOutline = ({
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
      d="M12 2.25a.75.75 0 0 1 .75.75v3.897c0 1.94-1.135 3.696-2.932 4.744l-.88.514c-1.412.823-2.188 2.125-2.188 3.448V21a.75.75 0 0 1-1.5 0v-5.397c0-1.94 1.135-3.696 2.932-4.744l.88-.514c1.412-.823 2.188-2.125 2.188-3.448V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v3.9c0 1.324.777 2.626 2.19 3.449l.875.51c1.798 1.047 2.935 2.805 2.935 4.746V21a.75.75 0 0 1-1.5 0v-5.395c0-1.324-.776-2.626-2.19-3.45l-.875-.51C12.387 10.598 11.25 8.841 11.25 6.9V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.97 17.97a.75.75 0 0 1 1.06 0L18 19.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06M2.97 17.97a.75.75 0 0 1 1.06 0L6 19.94l1.97-1.97a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsSplitDownOutline;
