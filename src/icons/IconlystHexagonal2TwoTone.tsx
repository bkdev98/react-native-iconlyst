import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonal2TwoTone = ({
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
      d="M20.62 15.282c0 .87-.464 1.674-1.217 2.109m1.217-8.673c0-.87-.464-1.675-1.217-2.11m-5.686-3.282a2.43 2.43 0 0 0-2.435 0M5.596 6.608a2.44 2.44 0 0 0-1.217 2.11m0 6.564c0 .87.464 1.674 1.217 2.109m5.686 3.283a2.43 2.43 0 0 0 2.435 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.62 15.282V8.718m-1.217-2.11-5.686-3.282m-2.435 0L5.596 6.608M4.38 8.718v6.564m1.217 2.109 5.686 3.283m2.435 0 5.686-3.283"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHexagonal2TwoTone;
