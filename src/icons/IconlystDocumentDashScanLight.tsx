import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashScanLight = ({
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
      d="M19.333 11.66V8.775c0-.51-.197-1-.55-1.366l-3.65-3.802A1.97 1.97 0 0 0 13.71 3H8.27a3.607 3.607 0 0 0-3.62 3.52v5.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.174 3.059v2.784c-.001 1.359 1.1 2.462 2.458 2.465h2.637M20.385 11.66H3.615M10.08 14.813v4.398M17.723 14.813v3.466M13.902 14.813V21M6.26 17.064v-2.251M6.26 20.998v-1.275"
    />
  </Svg>
);
export default IconlystDocumentDashScanLight;
