import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailBroken = ({
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
      d="M12 20.1H7.582C4.845 20.107 3 17.86 3 15.094v-6.18C3 6.15 4.845 3.9 7.582 3.9h8.836C19.155 3.9 21 6.15 21 8.913v6.181c0 2.766-1.845 5.013-4.582 5.006h-.834"
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
export default IconlystEmailBroken;
