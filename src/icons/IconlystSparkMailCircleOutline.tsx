import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparkMailCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.561 7.32a1.657 1.657 0 0 1 2.879 0l3.627 6.35a1.657 1.657 0 0 1-1.7 2.46l-1.396-.223-.391.73a1.657 1.657 0 0 1-2.922 0l-.41-.767-1.612.259a1.657 1.657 0 0 1-1.702-2.458l.651.372-.651-.372zm1.44.664a.16.16 0 0 0-.137.08l-3.627 6.35a.157.157 0 0 0 .161.234l2.139-.343a.75.75 0 0 1 .78.386l.663 1.238a.157.157 0 0 0 .278 0l.643-1.201a.75.75 0 0 1 .78-.386l1.922.306a.157.157 0 0 0 .162-.233l-3.628-6.351a.16.16 0 0 0-.136-.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparkMailCircleOutline;
