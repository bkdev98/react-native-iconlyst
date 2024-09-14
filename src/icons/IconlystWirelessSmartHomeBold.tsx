import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeBold = ({
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
      d="M16.403 12.125a.75.75 0 0 1-1.054.118c-1.94-1.55-4.757-1.55-6.697 0a.75.75 0 0 1-1.055-.118.75.75 0 0 1 .118-1.054c2.482-1.986 6.087-1.985 8.57 0a.75.75 0 0 1 .118 1.054m-1.88 2.364a.75.75 0 0 1-1.058.092 2.28 2.28 0 0 0-2.918.006.748.748 0 0 1-1.057-.084.75.75 0 0 1 .083-1.057 3.745 3.745 0 0 1 4.857-.013.75.75 0 0 1 .092 1.056m-1.772 1.828a.75.75 0 0 1-1.5 0c0-.414.336-.775.75-.775s.75.311.75.725zm7.01-8.498L14.188 3.28a3.47 3.47 0 0 0-4.376-.001l-5.574 4.54a3.44 3.44 0 0 0-1.276 2.678v7.18a3.825 3.825 0 0 0 3.821 3.82h10.432a3.826 3.826 0 0 0 3.822-3.82v-7.18a3.43 3.43 0 0 0-1.276-2.678"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeBold;
