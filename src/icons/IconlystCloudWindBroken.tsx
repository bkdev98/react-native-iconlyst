import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindBroken = ({
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
      d="M18.814 17.109a4.14 4.14 0 0 0 2.436-3.775c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899M5.686 17.111a4.14 4.14 0 0 1-2.436-3.774c0-2.596 1.833-4.12 4.103-4.14 0-.94.424-2.422 1.475-3.51M11.554 19.705h-4.11m9.591 0H14.98m0-3.81h-4.796"
    />
  </Svg>
);
export default IconlystCloudWindBroken;
