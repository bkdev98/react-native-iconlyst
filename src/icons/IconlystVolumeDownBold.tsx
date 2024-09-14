import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownBold = ({
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
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12.77 3c1.044 0 2.018.752 2.37 1.956.129.504.181 1.008.232 1.495l.047.442c.18 1.476.18 8.728 0 10.215l-.047.459c-.046.462-.092.941-.225 1.452-.352 1.202-1.29 1.981-2.354 1.981l-.105-.001c-.588 0-1.227-.36-1.59-.675l-3.53-2.941H5.755c-1.4 0-2.424-1.012-2.61-2.579-.214-1.566-.172-4.253 0-5.677.203-1.483 1.276-2.51 2.61-2.51h1.813l3.464-2.898c.417-.363 1.154-.721 1.737-.719m5.378 3.258a.91.91 0 0 1 1.278.237C20.44 7.988 21 9.943 21 12s-.56 4.012-1.574 5.505a.92.92 0 0 1-.755.404.9.9 0 0 1-.523-.167.955.955 0 0 1-.23-1.308c.803-1.183 1.245-2.758 1.245-4.434s-.442-3.25-1.245-4.434a.955.955 0 0 1 .23-1.308"
    />
  </Svg>
);
export default IconlystVolumeDownBold;
