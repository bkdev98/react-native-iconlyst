import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashScanBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.489 11.407h-.507V9.19a.42.42 0 0 0-.418-.422h-2.855c-1.701-.01-3.105-1.418-3.105-3.137V2.608a.43.43 0 0 0-.427-.432H8.212c-2.315 0-4.193 1.906-4.193 4.235v4.996h-.507a.723.723 0 1 0 0 1.445h16.977a.723.723 0 0 0 0-1.445"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.833 7.396c.648.007 1.55.009 2.313.007a.448.448 0 0 0 .32-.758l-1.86-1.954-1.884-1.978c-.278-.292-.764-.091-.764.314v2.475c0 1.039.847 1.894 1.875 1.894"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.008 14.137a.75.75 0 0 0-.75.75v4.399a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-.75-.75M17.65 14.137a.75.75 0 0 0-.75.75v3.467a.75.75 0 0 0 1.5 0v-3.467a.75.75 0 0 0-.75-.75M13.83 14.137a.75.75 0 0 0-.75.75v6.188a.75.75 0 0 0 1.5 0v-6.188a.75.75 0 0 0-.75-.75M6.188 14.137a.75.75 0 0 0-.75.75v2.252a.75.75 0 0 0 1.5 0v-2.252a.75.75 0 0 0-.75-.75M6.188 19.047a.75.75 0 0 0-.75.75v1.275a.75.75 0 0 0 1.5 0v-1.275a.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystDocumentDashScanBulk;
