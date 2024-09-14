import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowRightOutline = ({
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
      d="M15.186 4.304c-1.338-1.346-3.652-.406-3.652 1.502V8.07H4.127A2.127 2.127 0 0 0 2 10.197V13.8c0 1.175.952 2.127 2.127 2.127h7.407v2.27c0 1.903 2.307 2.846 3.645 1.502q1.86-1.866 3.725-3.726 1.238-1.235 2.474-2.473c.828-.828.83-2.17.003-3q-1.44-1.444-2.874-2.873C17.4 6.52 16.294 5.417 15.186 4.304m-2.152 1.502c0-.56.687-.848 1.088-.445 1.104 1.11 2.218 2.221 3.33 3.332.959.956 1.917 1.912 2.866 2.865a.623.623 0 0 1 0 .88l-2.471 2.47q-1.869 1.863-3.73 3.732a.634.634 0 0 1-1.083-.444v-2.49a1.28 1.28 0 0 0-1.28-1.28H4.128A.627.627 0 0 1 3.5 13.8v-3.602c0-.346.28-.627.627-.627h7.628a1.28 1.28 0 0 0 1.28-1.28z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowRightOutline;
