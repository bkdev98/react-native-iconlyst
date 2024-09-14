import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M2 13.287c0-2.411 1.878-4.39 4.231-4.502l.209-.005h4.79v6.105c0 .437.34.783.77.783.385 0 .711-.29.763-.676l.007-.107V8.78h4.78c2.38 0 4.335 1.91 4.445 4.314l.005.214v4.955c0 2.421-1.878 4.401-4.231 4.512l-.209.005H6.45c-2.39 0-4.336-1.92-4.445-4.315L2 18.253zM8.55 6.24a.764.764 0 0 1-.084-1.004l.074-.086 2.91-2.92a.764.764 0 0 1 1-.082l.09.082 2.91 2.92c.15.15.23.35.23.54a.773.773 0 0 1-1.234.624l-.086-.074-1.59-1.6v4.14h-1.54V4.64l-1.59 1.6c-.3.3-.79.3-1.09 0"
    />
  </Svg>
);
export default IconlystUploadBold;
