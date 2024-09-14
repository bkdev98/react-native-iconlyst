import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveBatteryBulk = ({
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
      d="M20.746 12.848c0 1.25-.5 1.35-1.05 1.35h-.21c.01-.19.01-.37.01-.55v-3.3c0-.2-.03-.38-.05-.55h.25c.63 0 1.05.09 1.05 1.35zm-1.05-4.55h-.61c-.15-.4-.36-.74-.63-1.05l2.17-2.17c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-14.9 14.9c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.83-1.83h7.34c2.06 0 3.6-.91 4.25-2.45h.55c.77 0 2.55-.28 2.55-2.85v-1.7c0-2.36-1.39-2.85-2.55-2.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.946 6.598-9.6 9.6a.47.47 0 0 1-.35.15c-.03 0-.05 0-.08-.01a.47.47 0 0 1-.37-.27c-.37-.74-.55-1.53-.55-2.42v-3.4c0-2.82 1.72-4.5 4.6-4.5h6c.2 0 .38.12.46.31s.04.4-.11.54"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRemoveBatteryBulk;
