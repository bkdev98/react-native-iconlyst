import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.705 15.534c-.76-.627-.706-2.304-.703-3.534-.003-1.23-.058-2.907.703-3.534.71-.584 1.209-.434 2.504-.529 1.297-.096 4.033-3.908 6.142-2.701 1.088.855 1.17 2.65 1.17 6.764s-.082 5.909-1.17 6.765c-2.109 1.205-4.845-2.606-6.142-2.702M18.581 8.314a7.4 7.4 0 0 1 0 7.372"
    />
  </Svg>
);
export default IconlystVolumeDownBroken;
