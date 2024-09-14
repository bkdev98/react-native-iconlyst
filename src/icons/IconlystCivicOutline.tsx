import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCivicOutline = ({
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
      d="M2.68 12c0-5.365 4.386-9.75 9.75-9.75 4.39 0 8.088 2.924 9.353 6.818a.75.75 0 1 1-1.427.464C19.282 6.226 16.14 3.75 12.43 3.75c-4.536 0-8.25 3.714-8.25 8.25s3.714 8.25 8.25 8.25c3.721 0 6.845-2.395 7.83-5.76a.75.75 0 1 1 1.44.42c-1.175 4.014-4.89 6.84-9.27 6.84-5.364 0-9.75-4.386-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.693 10.697a2.822 2.822 0 1 1 5.644 0c0 .861-.386 1.623-.986 2.137v2.539a.75.75 0 0 1-.75.75h-2.16a.75.75 0 0 1-.75-.75v-2.531a2.8 2.8 0 0 1-.998-2.145m2.822-1.322a1.316 1.316 0 0 0-.683 2.447.75.75 0 0 1 .359.64v2.16h.66v-2.166c0-.26.134-.501.355-.638.383-.237.631-.65.631-1.12 0-.73-.591-1.323-1.322-1.323"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCivicOutline;
