import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicBold = ({
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
      d="m6.266 16.54-1.438 1.44a1 1 0 0 0-.293.707.996.996 0 0 0 1 .999 1 1 0 0 0 .707-.293l1.438-1.44a.997.997 0 0 0 0-1.414 1 1 0 0 0-1.414 0M16.331 8.886a1 1 0 0 0 .707-.292l1.44-1.44a1 1 0 0 0 .293-.707 1 1 0 0 0-1.707-.708l-1.44 1.439a1.001 1.001 0 0 0 .707 1.708M17.269 12.566a1 1 0 0 0 1 1h2.035a1 1 0 1 0 0-2h-2.035a1 1 0 0 0-1 1M6.035 12.566a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h2.035a1 1 0 0 0 1-1M11.653 2.916a1 1 0 0 0-1 1v2.03a1 1 0 1 0 2 0v-2.03a1 1 0 0 0-1-1M11.653 18.186a1 1 0 0 0-1 1v2.03a1 1 0 1 0 2 0v-2.03a1 1 0 0 0-1-1M6.241 5.74a1 1 0 1 0-1.414 1.413l1.438 1.44A1 1 0 0 0 7.68 7.178zM21.706 21.21l-4.669-4.67a.999.999 0 1 0-1.414 1.413l4.67 4.67a.997.997 0 0 0 1.413 0 1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicBold;
