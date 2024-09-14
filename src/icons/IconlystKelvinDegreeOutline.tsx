import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeOutline = ({
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
      d="M5.532 3.75a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924m-2.462.962a2.462 2.462 0 1 1 4.924 0 2.462 2.462 0 0 1-4.924 0M18.783 5.343a2.056 2.056 0 0 1 2.63 3.161l-4.794 3.991 5.028 5.73a2.056 2.056 0 0 1-3.09 2.713l-5.1-5.812-.435.362v4.094a2.056 2.056 0 1 1-4.112 0V6.924a2.056 2.056 0 0 1 4.112 0v3.214zm1.743 1.225a.556.556 0 0 0-.783-.072l-.474-.57.474.57-6.991 5.819a.75.75 0 0 1-1.23-.577V6.924a.556.556 0 1 0-1.112 0v12.658a.556.556 0 1 0 1.112 0v-4.446a.75.75 0 0 1 .27-.576l1.267-1.054a.75.75 0 0 1 1.043.082l5.582 6.36a.556.556 0 0 0 .836-.733l-5.537-6.31a.75.75 0 0 1 .084-1.07l5.387-4.484a.556.556 0 0 0 .072-.783"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKelvinDegreeOutline;
