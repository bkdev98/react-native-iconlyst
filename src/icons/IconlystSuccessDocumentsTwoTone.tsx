import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSuccessDocumentsTwoTone = ({
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
      d="M20.758 17.684v-5.156a3.313 3.313 0 0 0-3.313-3.313H6.97a3.313 3.313 0 0 0-3.314 3.313v5.156a3.314 3.314 0 0 0 3.314 3.314h10.474a3.314 3.314 0 0 0 3.313-3.314"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.155 15.062 1.613 1.613 3.135-3.136M6.39 6.112h11.635M8.927 3h6.561"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSuccessDocumentsTwoTone;
