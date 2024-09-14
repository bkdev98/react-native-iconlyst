import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHailTwoTone = ({
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
      d="m17.99 12.753 1.861.384 1.263-1.418-.597-1.804-1.86-.385-1.263 1.42zM10.592 16.05l1.743.755 1.526-1.133-.218-1.887-1.744-.755-1.525 1.133zM6.221 12.772l-1.866.355-1.24-1.438.625-1.794 1.866-.355 1.24 1.438z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.577 14.918c-1.274 1.841-1.23 3.748-1.137 4.546M13.474 4.49c-1.852 2.48-1.401 5.352-1.401 5.352M6.533 15.476a6.7 6.7 0 0 1 1.023 3.986M3.535 19.51h16.529"
    />
  </Svg>
);
export default IconlystHailTwoTone;
