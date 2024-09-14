import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashScanTwoTone = ({
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
      d="M19.832 11.66V8.775c0-.51-.197-1-.55-1.366l-3.65-3.802A1.97 1.97 0 0 0 14.21 3h-5.44a3.607 3.607 0 0 0-3.62 3.52v5.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.674 3.059v2.784c-.001 1.359 1.1 2.462 2.458 2.465h2.637M20.885 11.66H4.115"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.58 14.813v4.398M18.223 14.813v3.466M14.401 14.813V21M6.76 17.064v-2.251M6.76 20.998v-1.275"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentDashScanTwoTone;
