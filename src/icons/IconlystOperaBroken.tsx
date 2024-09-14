import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaBroken = ({
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
      d="M14.178 16.63c2.091 0 3.785-2.05 3.785-4.58s-1.694-4.58-3.785-4.58c-2.09 0-3.783 2.05-3.783 4.58s1.694 4.58 3.783 4.58"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 17.214a5.213 5.213 0 1 0 0-10.427 5.213 5.213 0 0 0 0 10.427"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.28 9.504c.519.724.825 1.608.825 2.546a4.37 4.37 0 0 1-.826 2.546"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.749 21H8.532c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.75 5.081 5.593 3 8.532 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.567"
    />
  </Svg>
);
export default IconlystOperaBroken;
