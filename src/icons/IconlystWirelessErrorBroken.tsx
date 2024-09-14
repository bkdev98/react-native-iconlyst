import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessErrorBroken = ({
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
      d="m18.821 12.318 1.89-2.247a1.454 1.454 0 0 0-.095-1.967c-4.954-4.902-12.18-4.902-17.133 0a1.453 1.453 0 0 0-.097 1.967l7.561 8.988a1.44 1.44 0 0 0 2.203 0l3.465-4.12M12.05 11.096V8.152m0 5.993v-.01"
    />
  </Svg>
);
export default IconlystWirelessErrorBroken;
