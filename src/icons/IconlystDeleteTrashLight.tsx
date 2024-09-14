import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTrashLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.103 9.555H5.397M19.32 9.555l-.798 9.73a2.7 2.7 0 0 1-2.69 2.48H9.667a2.7 2.7 0 0 1-2.691-2.48l-.797-9.73M18.252 9.186c0-1.594-1.075-3.063-2.887-2.886-.83.08-1.504.691-1.992 1.33"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.525 9.555a3.851 3.851 0 0 1 3.573-5.29c2.33 0 3.427 2.093 3.427 2.093M12.52 21.781l-5.828-6.105M6.914 9.57l10.74 11.485M18.315 9.572 7.704 20.918M6.693 15.684l6.085-6.128M13.035 21.781l5.783-6.105M18.818 15.684l-6.04-6.128"
    />
  </Svg>
);
export default IconlystDeleteTrashLight;
