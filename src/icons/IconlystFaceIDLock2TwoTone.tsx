import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 3.283h8.435c2.948 0 4.783 2.081 4.783 5.027v7.947c0 2.945-1.835 5.026-4.784 5.026H8.282c-2.948 0-4.782-2.08-4.782-5.026V8.31c0-2.946 1.843-5.027 4.782-5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.268 16.68h-3.533a1.75 1.75 0 0 1-1.753-1.753v-1.983c0-.97.784-1.755 1.753-1.755h3.533c.968 0 1.753.786 1.753 1.755v1.983c0 .968-.785 1.752-1.753 1.752"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.61 11.226v-1.26a2.11 2.11 0 0 0-4.217-.007v1.267"
    />
  </Svg>
);
export default IconlystFaceIDLock2TwoTone;
