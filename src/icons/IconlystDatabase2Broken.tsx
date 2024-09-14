import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabase2Broken = ({
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
      d="M4.422 6v6s0 3 7.579 3M19.579 6v6s0 2.076-4.364 2.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.422 12v6s0 3 7.579 3 7.578-3 7.578-3v-6M12 3C7.816 3 4.423 4.352 4.423 6.019S7.815 9.038 12 9.038c4.185 0 7.578-1.352 7.578-3.02 0-1.132-1.566-2.119-3.883-2.635"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.974 17.636v-.02m0-.104a.103.103 0 1 0 0 .205.103.103 0 0 0 0-.205M7.974 11.477v-.02m0-.104a.103.103 0 1 0 0 .206.103.103 0 0 0 0-.205"
    />
  </Svg>
);
export default IconlystDatabase2Broken;
