import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgePlusTwoTone = ({
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
      d="M14.77 4.164H8.283C5.342 4.164 3.5 6.245 3.5 9.19v5.616c0 2.946 1.834 5.027 4.782 5.027h8.434c2.949 0 4.784-2.081 4.784-5.027v-3.67"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.598 6.115h3.901m-1.95-1.95v3.9M8.885 9.883h3.337m-3.337 4.236h7.229"
    />
  </Svg>
);
export default IconlystDocumentBadgePlusTwoTone;
