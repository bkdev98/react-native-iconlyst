import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading2Bold = ({
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
      d="M2.655 13.477a1 1 0 0 0 1.64 1.146l.006-.01a.995.995 0 0 0-.25-1.387 1.004 1.004 0 0 0-1.396.25M8.219 4.317a.997.997 0 0 0 1.372-.343l.006-.01a.995.995 0 0 0-.346-1.367 1.004 1.004 0 0 0-1.032 1.72M3.247 10.77c.34 0 .671-.173.858-.486l.006-.01a.995.995 0 0 0-.345-1.367 1.004 1.004 0 0 0-1.375.347 1 1 0 0 0 .856 1.516M6.057 6.337l.005-.01a.996.996 0 0 0-.45-1.337 1.007 1.007 0 0 0-1.344.452 1 1 0 1 0 1.789.895M6.32 16.737a1.004 1.004 0 0 0-1.032 1.72 1 1 0 0 0 1.372-.343l.006-.01a.995.995 0 0 0-.346-1.367M21.458 20.292l-2.768-2.758a9.38 9.38 0 0 0 2.268-6.103c.007-5.19-4.215-9.42-9.41-9.431h-.002a1 1 0 0 0-.002 2c4.093.009 7.42 3.341 7.414 7.429-.006 4.092-3.34 7.421-7.426 7.421a7.6 7.6 0 0 1-2.665-.494 1 1 0 0 0-.717 1.868 9.6 9.6 0 0 0 3.373.626c2.147 0 4.123-.73 5.711-1.943l2.812 2.801a.996.996 0 0 0 1.414-.002 1 1 0 0 0-.002-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoading2Bold;
