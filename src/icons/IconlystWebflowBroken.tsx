import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebflowBroken = ({
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
      d="M16.535 16.664c-.63 1.27-2.043 1.825-3.749 1.656-.342-2.24-.686-4.49-1.09-7.12-1.65 3.045-1.798 6.99-6.346 7.192L3.322 5.742c2.099.116 3.36 1.086 3.796 2.776.395 1.531.391 3.165.583 4.932 1.748-2.91 1.554-7.192 6.26-7.842l1.02 7.395c.105.024.937-2.018 1.367-3.012.43-1 .841-2.102 1.577-2.85.737-.749 3.205-1.303 3.397-1.128-1.111 2.507-2.174 5.039-3.31 7.534"
    />
  </Svg>
);
export default IconlystWebflowBroken;
