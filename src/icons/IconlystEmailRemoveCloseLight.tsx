import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRemoveCloseLight = ({
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
      d="M21 11.494v-2.58C21 6.15 19.155 3.9 16.418 3.9H7.582C4.845 3.9 3 6.15 3 8.913v6.181c0 2.766 1.845 5.013 4.582 5.006h5.236M21 20.1l-3.934-3.933m0 3.933L21 16.167"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.312 9.166-3.999 3.252a2.07 2.07 0 0 1-2.573 0L6.707 9.166"
    />
  </Svg>
);
export default IconlystEmailRemoveCloseLight;
