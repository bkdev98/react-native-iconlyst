import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChurchBroken = ({
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
      d="M3.72 20.966h18M10.699 18.886V17.46c0-.422.347-.77.77-.77h2.504c.421 0 .768.348.768.77v3.508M4.806 18.625v-4.526c0-.797.647-1.435 1.435-1.435h1.134M18.059 12.665h1.257c.788 0 1.435.638 1.435 1.435v3.482"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.061 20.966v-10.19c0-.503-.267-.97-.703-1.222L13.432 7.27a1.42 1.42 0 0 0-1.42 0L8.083 9.554a1.41 1.41 0 0 0-.703 1.222v10.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.72 7.08V3.032h2.95v2.284h-2.95M12.735 12.174h-.064m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522"
    />
  </Svg>
);
export default IconlystChurchBroken;
