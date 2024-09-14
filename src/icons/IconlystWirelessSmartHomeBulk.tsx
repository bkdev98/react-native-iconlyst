import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeBulk = ({
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
      d="M19.761 7.819 14.188 3.28a3.47 3.47 0 0 0-4.376-.001l-5.574 4.54a3.44 3.44 0 0 0-1.276 2.678v7.18a3.825 3.825 0 0 0 3.821 3.82h10.432a3.826 3.826 0 0 0 3.822-3.82v-7.18a3.43 3.43 0 0 0-1.276-2.678"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.35 12.243a.75.75 0 0 0 .935-1.172c-2.482-1.985-6.087-1.986-8.57 0a.75.75 0 1 0 .937 1.172c1.94-1.55 4.758-1.55 6.698 0"
    />
    <Path
      fill={props.color}
      d="M13.466 14.581a.749.749 0 1 0 .965-1.148 3.745 3.745 0 0 0-4.858.013.75.75 0 0 0 .974 1.141 2.28 2.28 0 0 1 2.919-.006M12.002 17.067a.75.75 0 0 0 .75-.75v-.05c0-.414-.337-.725-.75-.725-.415 0-.75.361-.75.775s.335.75.75.75"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeBulk;
