import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHomeBulk = ({
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
      d="M19.29 21.5a2.305 2.305 0 0 0 2.304-2.301V9.943a2.33 2.33 0 0 0-.914-1.805l-6.25-4.981a3 3 0 0 0-3.746 0L4.46 8.149a2.29 2.29 0 0 0-.914 1.805v9.245A2.305 2.305 0 0 0 5.85 21.5H19.29"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.87 19.421V21.5h5.455v-6.385c0-1.045-.85-1.9-1.897-1.9h-1.662a1.9 1.9 0 0 0-1.896 1.9z"
    />
  </Svg>
);
export default IconlystHomeHomeBulk;
