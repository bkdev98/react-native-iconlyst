import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongCircleDashOutline = ({
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
      d="M12.259 21.75c-.719 0-1.435-.08-2.136-.238a.75.75 0 0 1 .33-1.463 8.26 8.26 0 0 0 6.9-1.553.75.75 0 1 1 .925 1.18 9.7 9.7 0 0 1-6.02 2.074M10.985 16.812a2.853 2.853 0 1 1 2.83-2.513 2.856 2.856 0 0 1-2.83 2.512m0-4.206a1.355 1.355 0 1 0 .163.01 1 1 0 0 0-.167-.01zM7.1 20.115a.75.75 0 0 1-.427-.133 9.76 9.76 0 0 1-3.379-4.1.75.75 0 0 1 1.373-.607 8.26 8.26 0 0 0 2.86 3.47.75.75 0 0 1-.428 1.365zM3.277 13.33a.75.75 0 0 1-.747-.694 9.7 9.7 0 0 1 .32-3.287.75.75 0 1 1 1.447.394 8.2 8.2 0 0 0-.275 2.781.75.75 0 0 1-.692.8zM5.026 7.384a.749.749 0 0 1-.6-1.194 9.8 9.8 0 0 1 1.57-1.68.75.75 0 1 1 .97 1.145c-.498.421-.945.899-1.331 1.423a.75.75 0 0 1-.61.306M19.895 17.476a.75.75 0 0 1-.637-1.145 8.2 8.2 0 0 0 1.234-4.637 8.28 8.28 0 0 0-8.571-7.936.75.75 0 1 1-.06-1.5 9.737 9.737 0 0 1 8.672 14.862.75.75 0 0 1-.638.356"
    />
    <Path
      fill={props.color}
      d="M13.07 14.958q-.045.001-.09-.005a.75.75 0 0 1-.654-.835l.756-6.266a.75.75 0 0 1 1.472-.093 2.17 2.17 0 0 0 1.3 1.42.75.75 0 1 1-.472 1.424 3.3 3.3 0 0 1-1.055-.58l-.516 4.275a.75.75 0 0 1-.74.66"
    />
  </Svg>
);
export default IconlystSongCircleDashOutline;
