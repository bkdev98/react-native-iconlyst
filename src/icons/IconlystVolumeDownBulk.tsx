import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path d="M15.372 6.45c-.05-.486-.103-.99-.232-1.494C14.788 3.752 13.814 3 12.77 3c-.584-.002-1.32.356-1.738.72L7.568 6.616H5.755c-1.334 0-2.407 1.027-2.61 2.51-.172 1.424-.214 4.11 0 5.677.186 1.567 1.21 2.579 2.61 2.579h1.813l3.53 2.94c.363.315 1.002.676 1.59.676l.105.001c1.065 0 2.002-.78 2.354-1.98.133-.512.18-.99.225-1.453l.047-.459c.18-1.487.18-8.739 0-10.215z" />
      <Path
        d="M19.426 6.495a.91.91 0 0 0-1.278-.237.955.955 0 0 0-.23 1.308c.803 1.183 1.245 2.757 1.245 4.434 0 1.676-.442 3.25-1.245 4.434a.955.955 0 0 0 .23 1.308c.154.11.336.167.523.167a.92.92 0 0 0 .755-.404C20.44 16.012 21 14.057 21 12s-.56-4.012-1.574-5.505"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystVolumeDownBulk;
