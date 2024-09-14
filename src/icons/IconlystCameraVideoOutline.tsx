import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoOutline = ({
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
      d="M3.58 11.264C4.329 10.45 5.39 10 6.629 10h6.024c1.242 0 2.304.45 3.05 1.264.74.806 1.117 1.91 1.117 3.129v2.965c0 1.22-.376 2.323-1.117 3.13-.746.813-1.809 1.263-3.05 1.263H6.627c-1.242 0-2.304-.45-3.05-1.264-.74-.806-1.115-1.91-1.115-3.129v-2.965c0-1.22.377-2.323 1.118-3.13m1.106 1.014c-.443.482-.723 1.2-.723 2.115v2.965c0 .916.28 1.634.72 2.115.435.474 1.08.778 1.945.778h6.023c.865 0 1.511-.304 1.946-.778.442-.481.722-1.2.722-2.115v-2.965c0-.915-.28-1.634-.722-2.115-.435-.474-1.081-.778-1.945-.778H6.628c-.86 0-1.506.304-1.942.778"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.93 14.426a.75.75 0 0 1 .75-.75h2.52a.75.75 0 0 1 0 1.5H9.68a.75.75 0 0 1-.75-.75M12.67 3.75c-1.172 0-2.143.969-2.143 2.187s.97 2.187 2.144 2.187c1.173 0 2.144-.97 2.144-2.187 0-1.218-.97-2.187-2.144-2.187M9.028 5.937c0-2.026 1.622-3.687 3.644-3.687s3.644 1.661 3.644 3.687-1.622 3.687-3.644 3.687-3.644-1.662-3.644-3.687M5.733 5.84c-.604 0-1.114.5-1.114 1.142 0 .64.51 1.142 1.114 1.142s1.114-.501 1.114-1.142S6.338 5.84 5.733 5.84M3.12 6.982c0-1.449 1.16-2.642 2.614-2.642s2.614 1.193 2.614 2.642-1.16 2.642-2.614 2.642S3.12 8.43 3.12 6.982"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.814 20.279a1.85 1.85 0 0 1-1.207-.438l-3.01-2.508a.752.752 0 0 1 .12-1.254.75.75 0 0 1 .84.102l3.01 2.509a.38.38 0 0 0 .244.089.29.29 0 0 0 .277-.115.42.42 0 0 0 .121-.3l.011-4.98a.41.41 0 0 0-.21-.363.39.39 0 0 0-.432.042l-3.023 2.51a.75.75 0 0 1-.958-1.155l3.023-2.51a1.884 1.884 0 0 1 2.675.27c.277.343.427.77.425 1.21l-.01 4.98a1.913 1.913 0 0 1-1.896 1.91"
    />
  </Svg>
);
export default IconlystCameraVideoOutline;