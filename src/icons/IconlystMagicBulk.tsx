import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m6.766 16.54-1.438 1.44a1 1 0 0 0-.293.707.996.996 0 0 0 1 .999 1 1 0 0 0 .707-.293l1.438-1.44a.997.997 0 0 0 0-1.414 1 1 0 0 0-1.414 0M16.831 8.886a1 1 0 0 0 .707-.292l1.44-1.44a1 1 0 0 0 .293-.707 1 1 0 0 0-1.707-.708l-1.44 1.439a1.001 1.001 0 0 0 .707 1.708M17.769 12.566a1 1 0 0 0 1 1h2.035a1 1 0 1 0 0-2h-2.035a1 1 0 0 0-1 1M6.535 12.566a1 1 0 0 0-1-1H3.5a1 1 0 1 0 0 2h2.035a1 1 0 0 0 1-1M12.153 2.916a1 1 0 0 0-1 1v2.03a1 1 0 1 0 2 0v-2.03a1 1 0 0 0-1-1M12.153 18.186a1 1 0 0 0-1 1v2.03a1 1 0 1 0 2 0v-2.03a1 1 0 0 0-1-1M6.742 5.74a1 1 0 1 0-1.414 1.413l1.438 1.44A1 1 0 0 0 8.18 7.178z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.206 21.21-4.669-4.67a.999.999 0 1 0-1.414 1.413l4.67 4.67a.997.997 0 0 0 1.413 0 1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicBulk;
