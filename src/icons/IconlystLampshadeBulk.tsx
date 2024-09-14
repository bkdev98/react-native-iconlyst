import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampshadeBulk = ({
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
      fill={props.color}
      d="M12.766 13.991v6.259h3.43a.75.75 0 0 1 0 1.5H7.834a.75.75 0 0 1 0-1.5h3.433v-6.266z"
    />
    <Path
      fill={props.color}
      d="M7.593 4.309A2.48 2.48 0 0 1 9.978 2.5h4.033c1.108 0 2.082.736 2.384 1.803l2.088 7.387a1.823 1.823 0 0 1-1.763 2.32l-.09-.001v1.97a.75.75 0 1 1-1.5 0v-1.977l-2.364-.01-1.5-.007-3.981-.018a1.825 1.825 0 0 1-1.748-2.316z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLampshadeBulk;