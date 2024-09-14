import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.621h8.435C19.165 3.621 21 5.702 21 8.648v7.947c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.621 3 19.541 3 16.595V8.648c0-2.946 1.843-5.027 4.782-5.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.768 17.017h-3.533a1.753 1.753 0 0 1-1.753-1.753v-1.983c0-.969.784-1.754 1.753-1.754h3.533c.968 0 1.753.785 1.753 1.754v1.983c0 .968-.785 1.753-1.753 1.753"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.11 11.564v-1.26a2.11 2.11 0 0 0-4.217-.007v1.267"
    />
  </Svg>
);
export default IconlystFaceIDLock2Light;
