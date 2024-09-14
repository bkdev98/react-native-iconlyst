import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineEditBulk = ({
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
      d="M11.587 9.496h-4.03a.75.75 0 0 1 0-1.5h4.03a.75.75 0 0 1 0 1.5M9.2 13.85H7.557a.75.75 0 1 1 0-1.5H9.2a.75.75 0 0 1 0 1.5m3.753 3.028 3.174-3.466a3 3 0 0 1 2.84-.89c.133.029.264-.067.264-.202V6.966a4.55 4.55 0 0 0-4.544-4.544H7.8a4.55 4.55 0 0 0-4.542 4.544v9.579A4.547 4.547 0 0 0 7.8 21.088h4.05c.142 0 .24-.146.198-.282a2.8 2.8 0 0 1-.104-1.098l.08-.742a3.7 3.7 0 0 1 .929-2.088"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.175 16.224-3.13 3.415a.98.98 0 0 1-.571.315l-.794.052.08-.746a.97.97 0 0 1 .239-.544l3.155-3.444a.243.243 0 0 1 .344-.014l.666.617a.247.247 0 0 1 .01.35m1.009-1.448-.667-.618a1.747 1.747 0 0 0-2.467.098l-3.163 3.454a2.47 2.47 0 0 0-.62 1.39l-.078.744c-.054.49.12.966.478 1.305a1.55 1.55 0 0 0 1.332.406l.723-.122a2.48 2.48 0 0 0 1.437-.789l3.12-3.404a1.747 1.747 0 0 0-.095-2.464M11.587 9.496h-4.03a.75.75 0 0 1 0-1.5h4.03a.75.75 0 0 1 0 1.5M9.2 13.85H7.557a.75.75 0 1 1 0-1.5H9.2a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocuemtn2LineEditBulk;
