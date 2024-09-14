import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRampRightDownOutline = ({
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
      d="M6.5 11.543a.75.75 0 0 1 .75.75v6.896l2.22-2.22a.75.75 0 1 1 1.06 1.061l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22v-6.897a.75.75 0 0 1 .75-.75M16.97 9.97a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L19.94 14l-2.97-2.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7 2.25a.75.75 0 0 1 .75.75c0 5.66 4.59 10.25 10.25 10.25h3a.75.75 0 0 1 0 1.5h-3C11.51 14.75 6.25 9.49 6.25 3A.75.75 0 0 1 7 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRampRightDownOutline;
