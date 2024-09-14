import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeAiTwoTone = ({
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
      d="M11.998 19.112c3.705 0 7.094-2.664 9.002-7.103-1.908-4.439-5.297-7.103-9.002-7.103-3.701 0-7.09 2.664-8.998 7.103 1.908 4.441 5.297 7.103 9.002 7.103z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.302 13.726-.088-.238a3.28 3.28 0 0 0-1.938-1.942l-.238-.088.238-.088a3.28 3.28 0 0 0 1.938-1.941l.088-.239.088.239c.333.899 1.04 1.608 1.939 1.94l.238.089-.238.088a3.28 3.28 0 0 0-1.939 1.942zM14.936 14.81a1.54 1.54 0 0 0-1.027-1.028c.492-.15.877-.536 1.027-1.029.15.493.534.879 1.027 1.029-.492.15-.877.535-1.027 1.028"
    />
  </Svg>
);
export default IconlystEyeAiTwoTone;
