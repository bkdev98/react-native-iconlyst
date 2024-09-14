import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookLight = ({
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
      d="M3 16.417v.507a2.43 2.43 0 0 0 2.429 2.428h13.143A2.43 2.43 0 0 0 21 16.924v-.507a.55.55 0 0 0-.55-.55H3.55a.55.55 0 0 0-.55.55"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.668 15.867V7.66a3.01 3.01 0 0 0-3.011-3.013H7.34a3.01 3.01 0 0 0-3.012 3.013v8.206M11.324 7.676h1.35"
    />
  </Svg>
);
export default IconlystMacNotebookLight;
