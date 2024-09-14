import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftExelBroken = ({
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
      d="M8.615 7.128v-.835c0-1.588.998-2.718 2.596-2.718h7.951c1.599 0 2.586 1.13 2.586 2.718v11.412c0 1.589-.988 2.719-2.586 2.719h-2.71M8.615 16.87v.836c0 1.588.998 2.718 2.596 2.718H13.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 14.15c0 1.593.993 2.72 2.588 2.72h4.564c1.595 0 2.587-1.127 2.587-2.72v-4.3c0-1.595-.992-2.721-2.587-2.721H6.338c-1.591 0-2.588 1.126-2.588 2.72v1.117M16.969 6v9.065c0 .502.406.908.908.908h3.872M19.105 11.995h-5.613M15.534 8.023h6.215M9.91 10.135l-2.768 3.719m-.001-3.72 2.769 3.72"
    />
  </Svg>
);
export default IconlystMicrosoftExelBroken;
