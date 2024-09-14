import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.417 7.438a3.833 3.833 0 1 1 7.665 0 3.833 3.833 0 0 1-7.665 0m3.833-2.333a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666M3.48 12.036a.75.75 0 0 1 1.033.238 9.1 9.1 0 0 0 7.737 4.289 9.12 9.12 0 0 0 7.737-4.289.75.75 0 0 1 1.272.796 10.62 10.62 0 0 1-9.009 4.993 10.6 10.6 0 0 1-9.009-4.993.75.75 0 0 1 .238-1.034"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.642 15.957a.75.75 0 0 1 .97.428l1.686 4.345a.75.75 0 0 1-1.399.543l-1.685-4.345a.75.75 0 0 1 .428-.97M11.39 9.602a.75.75 0 0 1 .428.97l-4.15 10.7a.75.75 0 1 1-1.398-.541l4.15-10.701a.75.75 0 0 1 .97-.428M12.25 2.25A.75.75 0 0 1 13 3v1.356a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M13.177 9.602a.75.75 0 0 1 .97.428l1.264 3.257a.75.75 0 1 1-1.399.543l-1.263-3.258a.75.75 0 0 1 .428-.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidStudioOutline;
