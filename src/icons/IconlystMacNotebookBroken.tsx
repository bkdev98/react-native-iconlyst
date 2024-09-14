import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 19.352H5.929A2.43 2.43 0 0 1 3.5 16.924v-.507a.55.55 0 0 1 .55-.55h16.9a.55.55 0 0 1 .55.55v.507a2.43 2.43 0 0 1-2.428 2.428h-3.286"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.168 15.867V7.66a3.01 3.01 0 0 0-3.012-3.013h-5.534M4.828 15.867V7.66A3.01 3.01 0 0 1 7.84 4.648h.937M11.824 7.676h1.35"
    />
  </Svg>
);
export default IconlystMacNotebookBroken;
