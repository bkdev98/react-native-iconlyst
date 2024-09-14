import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChainlinkTwoTone = ({
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
      d="M20.62 15.282V8.718c0-.87-.464-1.675-1.217-2.11l-5.686-3.282a2.43 2.43 0 0 0-2.435 0L5.596 6.608a2.44 2.44 0 0 0-1.217 2.11v6.564c0 .87.464 1.674 1.217 2.109l5.686 3.283a2.43 2.43 0 0 0 2.435 0l5.686-3.283a2.44 2.44 0 0 0 1.217-2.109"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChainlinkTwoTone;
