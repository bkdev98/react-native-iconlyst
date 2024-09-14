import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderShieldBulk = ({
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
      d="M16.395 5.69h-2.652a1.65 1.65 0 0 1-1.313-.66l-.858-1.143A2.67 2.67 0 0 0 9.464 2.84H7.588C4.164 2.84 2.5 4.744 2.5 8.66v7.32c0 3.65 2.185 5.83 5.845 5.83h7.296c3.652 0 5.833-2.18 5.833-5.827l.026-4.663c0-3.841-1.622-5.63-5.105-5.63"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.431 12.313a63 63 0 0 0-.016 1.466c0 2.744-3.065 3.707-3.196 3.747a.76.76 0 0 1-.435 0c-.131-.04-3.196-1.003-3.196-3.747 0-.665-.008-1.123-.014-1.445v-.026c-.017-.794-.022-1.061.353-1.433.403-.394 2.606-1.117 3.074-1.117.452 0 2.667.699 3.083 1.126.367.378.362.641.347 1.423zm-5.362-.221-.004-.17c.474-.217 1.678-.632 1.903-.664.299.033 1.576.47 1.97.649a16 16 0 0 1-.007.377c-.007.328-.015.8-.015 1.495 0 1.31-1.37 2.005-1.914 2.23-.545-.225-1.914-.92-1.914-2.23 0-.696-.008-1.17-.015-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderShieldBulk;
