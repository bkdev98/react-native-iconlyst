import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSearchBroken = ({
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
      d="M17 7.113v-2.46c0-1.08-1.018-1.87-2.064-1.6L6.202 5.308a1.434 1.434 0 0 0-1.077 1.388v3.04M11.014 21.002H7.269a2.145 2.145 0 0 1-2.144-2.145v-6.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.108 11.594v-2.16c0-1.185-.96-2.145-2.145-2.145H5.125M9.912 14.185c0-1.224.99-2.205 2.205-2.205M16.37 14.348a2.93 2.93 0 1 1-2.354 1.183M18.363 19.422l1.579 1.575"
    />
  </Svg>
);
export default IconlystNotebookSearchBroken;
