import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalMaximizeCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.472a.75.75 0 0 1 .75.75v2.468l1.164-1.165a.75.75 0 0 1 1.06 1.061L12.53 18.03a.75.75 0 0 1-1.06 0l-2.445-2.444a.75.75 0 0 1 1.061-1.06l1.164 1.164v-2.468a.75.75 0 0 1 .75-.75M12 5.75a.75.75 0 0 1 .53.22l2.445 2.444a.75.75 0 1 1-1.06 1.06L12.75 8.312v2.467a.75.75 0 1 1-1.5 0V8.31l-1.164 1.164a.75.75 0 1 1-1.06-1.061L11.47 5.97a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalMaximizeCircleOutline;
