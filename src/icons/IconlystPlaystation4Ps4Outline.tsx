import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation4Ps4Outline = ({
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
      d="M8.344 15.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.05c.8 0 1.18-.38 1.19-1.18l.02-1.86c.02-1.63 1.05-2.65 2.68-2.66h1.06c.41 0 .75.34.75.75s-.34.75-.75.75h-1.05c-.8 0-1.18.38-1.19 1.18l-.02 1.86c-.02 1.63-1.05 2.65-2.68 2.66zM3.005 15.62c-.41 0-.75-.34-.75-.75v-1.279c0-1.17.95-2.13 2.12-2.13h1.86c.43 0 .78-.35.78-.79s-.35-.79-.79-.79h-3.23c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.23c1.26 0 2.29 1.03 2.29 2.29s-1.02 2.29-2.28 2.29h-1.86c-.34 0-.62.28-.62.63v1.28c0 .41-.34.75-.75.75M19.535 15.602c-.41 0-.75-.34-.75-.75v-.55h-3.47c-.3 0-.57-.18-.69-.46s-.06-.6.15-.81l4.22-4.42a.76.76 0 0 1 .82-.18c.28.11.47.39.47.7v3.67h.72c.41 0 .75.34.75.75s-.34.75-.75.75h-.72v.55c0 .41-.34.75-.75.75m-2.47-2.8h1.72v-1.8z"
    />
  </Svg>
);
export default IconlystPlaystation4Ps4Outline;
