import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.713 21.473a3.97 3.97 0 0 1-3.91-3.168c-.463-2.269-1.282-6.5-1.282-6.5a4.615 4.615 0 0 1 4.084-5.118 4.605 4.605 0 0 1 5.052 4.094c0 .064.08 4.377.1 6.691a3.976 3.976 0 0 1-3.6 3.98 4 4 0 0 1-.444.021m-3.71-9.892s.812 4.178 1.27 6.424a2.522 2.522 0 0 0 4.98-.525c-.015-2.308-.092-6.609-.092-6.609a3.1 3.1 0 0 0-6.157.71"
    />
    <Path
      fill={props.color}
      d="M5.527 13.95a.75.75 0 0 1-.37-1.4L7.04 11.49l-.04-.39a.75.75 0 1 1 1.491-.155l.06.583.93.747a.75.75 0 0 1-.94 1.169l-.789-.634-1.857 1.048a.75.75 0 0 1-.368.094M16.479 18.683a4 4 0 0 1-.626-.048 3.98 3.98 0 0 1-3.416-4.14c.123-2.31.4-6.616.4-6.616a4.6 4.6 0 1 1 9.1 1.313c-.011.064-1.024 4.257-1.591 6.5a3.964 3.964 0 0 1-3.867 2.991M14.324 8.04s-.267 4.247-.39 6.536a2.484 2.484 0 0 0 2.144 2.577 2.52 2.52 0 0 0 2.809-1.828 772 772 0 0 0 1.576-6.42 3.1 3.1 0 0 0-2.612-3.462 3.1 3.1 0 0 0-3.527 2.6z"
    />
    <Path
      fill={props.color}
      d="M18.853 11.274a.75.75 0 0 1-.4-.114l-1.81-1.134-.813.6a.751.751 0 0 1-.887-1.211l.963-.705.089-.58a.75.75 0 1 1 1.482.226l-.058.387 1.83 1.147a.75.75 0 0 1-.4 1.386z"
    />
  </Svg>
);
export default IconlystSlippers3Outline;
