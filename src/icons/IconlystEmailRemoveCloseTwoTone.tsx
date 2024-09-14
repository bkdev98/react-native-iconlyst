import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRemoveCloseTwoTone = ({
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
      d="M21.5 11.494v-2.58c0-2.764-1.845-5.014-4.582-5.014H8.082C5.345 3.9 3.5 6.15 3.5 8.913v6.181c0 2.766 1.845 5.013 4.582 5.006h5.236"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 20.1-3.934-3.933m0 3.933 3.933-3.933M17.812 9.166l-3.999 3.252a2.07 2.07 0 0 1-2.573 0L7.207 9.166"
    />
  </Svg>
);
export default IconlystEmailRemoveCloseTwoTone;
