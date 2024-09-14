import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgePlusBroken = ({
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
      d="M14.27 4.164H7.783C4.842 4.164 3 6.245 3 9.19v5.616c0 2.946 1.834 5.027 4.782 5.027M21 11.137v3.67c0 2.945-1.835 5.026-4.784 5.026h-4.743M17.098 6.115h3.901m-1.95-1.95v3.9M8.385 9.883h3.337m-3.337 4.236h7.229"
    />
  </Svg>
);
export default IconlystDocumentBadgePlusBroken;
