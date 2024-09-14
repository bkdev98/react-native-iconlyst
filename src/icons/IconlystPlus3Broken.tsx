import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus3Broken = ({
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
      d="M20.12 11.206V8.718c0-.871-.464-1.675-1.217-2.11l-5.686-3.283a2.44 2.44 0 0 0-2.434 0L5.097 6.608a2.44 2.44 0 0 0-1.218 2.11v6.565c0 .87.465 1.673 1.218 2.108l5.686 3.283a2.43 2.43 0 0 0 2.434 0l5.686-3.283a2.44 2.44 0 0 0 1.218-2.108v-.642M12 8.945v6.113M15.058 12.004H8.939"
    />
  </Svg>
);
export default IconlystPlus3Broken;
