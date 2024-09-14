import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInformationBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.1h4.418c2.737 0 4.582-2.25 4.582-5.012V8.906c0-2.765-1.845-5.012-4.582-5.006H7.582C4.845 3.894 3 6.141 3 8.906v6.182C3 17.85 4.845 20.1 7.582 20.1h1.141M6.691 13.008h2.7m-2.7 2.875h6.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.267 10.816a.557.557 0 0 1-.558-.558V8.225c0-.308.25-.557.558-.557h2.485c.307 0 .557.249.557.557v2.033c0 .308-.25.558-.558.558"
    />
  </Svg>
);
export default IconlystInformationBroken;
