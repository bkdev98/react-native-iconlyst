import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.16 9.664h12.727M15.815 3v2.962M8.544 3v2.962M15.99 4.422c2.652 0 4.294 1.472 4.286 4.178v8.214c0 2.706-1.642 4.186-4.293 4.186H8.37c-2.644 0-4.294-1.506-4.294-4.254V8.6c0-1.731.675-2.957 1.854-3.616M8.55 4.422h4.707M8.146 13.367h.01M8.146 16.844h.01M12.166 13.367h.01M12.166 16.844h.01M16.176 13.367h.01M16.176 16.844h.01"
    />
  </Svg>
);
export default IconlystCalendarBroken;
