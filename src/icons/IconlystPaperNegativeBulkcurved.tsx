import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeBulkcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.26 8.674a2.99 2.99 0 0 1-2.99-2.98V3.652l5.282 5.022zm3.695.176c0-.04 0-.07-.01-.11-.03-.18-.06-.36-.09-.53a.5.5 0 0 0-.15-.28l-5.67-5.4a.46.46 0 0 0-.27-.13l-.53-.06c-.03-.01-.07-.01-.1-.01-.58-.05-1.22-.08-1.89-.08-6.56 0-8.89 2.55-8.89 9.75 0 7.19 2.33 9.75 8.89 9.75 6.57 0 8.9-2.56 8.9-9.75 0-1.2-.06-2.24-.19-3.15"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.08 13.823h4.9a.75.75 0 1 0 0-1.5h-4.9a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystPaperNegativeBulkcurved;
