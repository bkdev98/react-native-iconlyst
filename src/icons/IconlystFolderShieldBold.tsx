import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderShieldBold = ({
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
      d="M15.431 12.315a63 63 0 0 0-.016 1.466c0 2.744-3.065 3.707-3.196 3.747a.76.76 0 0 1-.435 0c-.131-.04-3.196-1.003-3.196-3.747 0-.683-.009-1.148-.015-1.471-.016-.794-.021-1.061.354-1.433.403-.394 2.606-1.117 3.074-1.117.452 0 2.667.699 3.083 1.126.368.379.362.643.347 1.429m.964-6.625h-2.652a1.65 1.65 0 0 1-1.313-.66l-.858-1.143A2.67 2.67 0 0 0 9.464 2.84H7.588C4.164 2.84 2.5 4.744 2.5 8.66v7.32c0 3.65 2.185 5.83 5.845 5.83h7.296c3.652 0 5.833-2.18 5.833-5.827l.026-4.663c0-3.841-1.622-5.63-5.105-5.63"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.065 11.924c0 .089.005.204.008.357.007.33.015.804.015 1.5 0 1.31 1.369 2.005 1.914 2.23.545-.225 1.914-.92 1.914-2.23 0-.694.008-1.167.015-1.495l.008-.377c-.395-.178-1.672-.616-1.971-.65-.225.033-1.43.448-1.903.665"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderShieldBold;
