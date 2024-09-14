import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChurchLight = ({
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
      d="M3.47 20.965h18M10.45 20.969V17.46c0-.422.347-.77.769-.77h2.504c.422 0 .769.348.769.77v3.508M4.556 20.967V14.1c0-.797.647-1.435 1.435-1.435h1.134M17.809 12.664h1.257c.788 0 1.435.638 1.435 1.435v6.868"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.811 20.968v-10.19c0-.503-.267-.97-.703-1.222l-3.926-2.283a1.42 1.42 0 0 0-1.42 0L7.833 9.556a1.41 1.41 0 0 0-.703 1.222v10.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.47 7.08V3.032h2.95v2.284h-2.95M12.484 12.172h-.063m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522"
    />
  </Svg>
);
export default IconlystChurchLight;
