import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarCheckBroken = ({
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
      d="M4.568 9.664h13.27M16.225 3v2.962M8.954 3v2.962M10.444 15.084l1.755 1.758 3.617-3.618"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.398 4.422c2.651 0 4.294 1.472 4.286 4.178v8.214c0 2.706-1.642 4.186-4.294 4.186H8.778c-2.644 0-4.294-1.506-4.294-4.254V8.6c0-1.731.675-2.957 1.854-3.616M8.959 4.422h4.706"
    />
  </Svg>
);
export default IconlystCalendarCheckBroken;
