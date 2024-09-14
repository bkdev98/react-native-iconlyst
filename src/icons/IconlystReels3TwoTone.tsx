import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels3TwoTone = ({
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
      d="M8.152 3h8.696c2.66 0 4.316 1.878 4.316 4.536v8.928c0 2.658-1.655 4.536-4.317 4.536H8.152c-2.661 0-4.316-1.878-4.316-4.536V7.536C3.836 4.878 5.499 3 8.152 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.779 15.292a9 9 0 0 1-2.63 1.65c-.85.336-1.562-.082-1.667-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.898-1.239 1.666-.916.982.403 1.865.95 2.63 1.651.656.594.671 1.437 0 2.053"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.052 8.209H3.947m4.702-.007L7.262 3.077m5.663 5.125-1.449-5.198m5.734 5.198L15.76 3.004"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReels3TwoTone;
