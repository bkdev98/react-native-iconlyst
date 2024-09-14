import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResizeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.408 8.82h-2.817c-1.143 0-2.073.93-2.073 2.071v2.818c0 1.142.93 2.071 2.073 2.071h2.817a2.074 2.074 0 0 0 2.073-2.07V10.89a2.075 2.075 0 0 0-2.073-2.072M16.935 4.062h.002l2.249-.005-2.651 2.65a.75.75 0 0 0 1.06 1.062l2.65-2.65-.004 2.247a.75.75 0 0 0 .748.75h.002a.75.75 0 0 0 .75-.747l.008-4.061a.74.74 0 0 0-.218-.535c-.043-.043-.097-.067-.146-.097-.034-.021-.063-.051-.1-.066A.8.8 0 0 0 21 2.553h-.003l-4.064.009a.75.75 0 0 0 .002 1.5M21.74 17.234a.75.75 0 0 0-.75-.75c-.44-.014-.75.337-.75.753l.006 2.247-2.651-2.651a.749.749 0 1 0-1.06 1.06l2.65 2.652-2.248-.005h-.003a.75.75 0 0 0-.002 1.5l4.064.008H21a.747.747 0 0 0 .749-.754zM7.067 2.562l-4.064-.01H3a.744.744 0 0 0-.75.751l.008 4.066a.75.75 0 0 0 .75.748h.002a.75.75 0 0 0 .748-.751l-.004-2.248 2.65 2.65c.147.148.339.22.53.22a.75.75 0 0 0 .53-1.281l-2.65-2.65 2.248.005h.002a.75.75 0 0 0 .002-1.5M7.063 20.54l-2.247.004 2.65-2.65a.75.75 0 0 0-1.06-1.062l-2.651 2.652.004-2.248a.75.75 0 0 0-.748-.75h-.002a.75.75 0 0 0-.75.747l-.008 4.063v.002a.746.746 0 0 0 .75.751h.005l4.06-.01a.75.75 0 0 0 .749-.75c-.001-.417-.322-.772-.752-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResizeBold;
