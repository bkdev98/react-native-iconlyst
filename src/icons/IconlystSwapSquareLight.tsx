import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapSquareLight = ({
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
      d="M16.216 3.005H7.784C4.867 3.005 3.01 5.076 3 8.023v7.945c0 2.946 1.867 5.027 4.784 5.027h8.432c2.946 0 4.784-2.11 4.784-5.027V8.023c0-2.947-1.867-5.018-4.784-5.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.72 17.194-1.663-1.663 1.662-1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.953 12.226v1.03a2.276 2.276 0 0 1-2.276 2.276h-5.62M14.288 6.784l1.663 1.663-1.663 1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.055 11.755v-1.031a2.276 2.276 0 0 1 2.275-2.276h5.621"
    />
  </Svg>
);
export default IconlystSwapSquareLight;
