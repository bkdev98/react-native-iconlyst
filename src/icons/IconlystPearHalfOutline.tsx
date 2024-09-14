import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPearHalfOutline = ({
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
      d="M12.19 21.749H12c-2.61.08-4.96-1.26-6.17-3.46-1.11-2.03-.97-4.42.38-6.38.19-.27.43-.56.7-.85.7-.8 1.5-1.7 1.5-2.77 0-2.47 1.38-4 3.59-4s3.47 1.44 3.59 3.96c0 1.19.78 2.05 1.48 2.8.27.3.53.58.72.86 1.35 1.97 1.49 4.35.38 6.38-1.17 2.15-3.45 3.46-5.97 3.46zm-.2-1.5h.02c2.06.05 3.89-.97 4.83-2.68.84-1.55.73-3.3-.3-4.82-.13-.2-.36-.44-.59-.69-.79-.86-1.87-2.04-1.87-3.78-.11-2.23-1.25-2.5-2.09-2.5-1.73 0-2.09 1.36-2.09 2.5 0 1.63-1.08 2.86-1.87 3.76-.23.26-.44.5-.58.71-1.04 1.52-1.15 3.27-.3 4.82.93 1.71 2.77 2.73 4.83 2.68H12z"
    />
    <Path
      fill={props.color}
      d="M11.99 5.789a.75.75 0 0 1-.75-.72c-.06-1.25.58-2.34.65-2.46.21-.35.67-.47 1.03-.25.35.21.47.68.25 1.03 0 0-.47.8-.44 1.61.02.41-.3.76-.71.78h-.04zM13.4 16.279c-.37 0-.69-.27-.74-.64l-.2-1.35c-.06-.41.22-.79.63-.85.4-.06.79.22.85.63l.2 1.35c.06.41-.22.79-.63.85h-.11zM10.58 16.279h-.11a.747.747 0 0 1-.63-.85l.2-1.35c.06-.41.45-.7.85-.63.41.06.69.44.63.85l-.2 1.35c-.05.37-.38.64-.74.64z"
    />
  </Svg>
);
export default IconlystPearHalfOutline;
