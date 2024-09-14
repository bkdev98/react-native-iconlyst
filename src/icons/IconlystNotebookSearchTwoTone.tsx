import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSearchTwoTone = ({
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
      d="M17.25 7.113v-2.46c0-1.08-1.018-1.87-2.064-1.6L6.45 5.308a1.434 1.434 0 0 0-1.076 1.388v12.16c0 1.184.96 2.144 2.144 2.144h3.745"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.358 11.594v-2.16c0-1.185-.96-2.145-2.145-2.145H5.375M10.162 14.185c0-1.224.99-2.205 2.205-2.205"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.613 19.424 1.578 1.575m-3.572-6.651a2.93 2.93 0 1 1 0 5.859 2.93 2.93 0 0 1 0-5.86"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotebookSearchTwoTone;
