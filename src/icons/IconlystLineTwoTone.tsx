import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 11.14c0 4.422 4.03 7.802 9 7.802q.927-.001 1.8-.16v2.2c0 .417.424.227.761 0C15.623 20.265 21 15.852 21 11.14c0-4.422-4.03-8.37-9-8.37s-9 3.948-9 8.37Z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.396 9.371v3.6h1.17m1.863-3.6v3.6m1.957 0v-3.6l2.49 3.6v-3.6m3.729 0h-1.771v1.8m0 0v1.8h1.77m-1.77-1.8h1.342"
    />
  </Svg>
);
export default IconlystLineTwoTone;
