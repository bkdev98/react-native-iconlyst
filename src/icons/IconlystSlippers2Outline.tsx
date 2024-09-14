import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers2Outline = ({
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
      d="M16.527 17.963a4.017 4.017 0 0 1-4.016-4.16c.122-2.295.4-6.565.4-6.565a4.565 4.565 0 1 1 9.038 1.305 631 631 0 0 1-1.579 6.45 3.94 3.94 0 0 1-3.844 2.97m-2.13-10.566s-.267 4.214-.388 6.485a2.5 2.5 0 0 0 4.9.742c.564-2.22 1.564-6.37 1.564-6.37a3.075 3.075 0 0 0-2.586-3.429 3.065 3.065 0 0 0-3.492 2.572zM7.969 20.71a3.94 3.94 0 0 1-3.84-2.969 858 858 0 0 1-1.567-6.388c0-.02-.008-.042-.011-.063a4.567 4.567 0 0 1 9.03-1.37c.008.065.282 4.335.4 6.63a3.95 3.95 0 0 1-3.4 4.113 4 4 0 0 1-.612.047m-3.94-9.676c.095.394 1.023 4.233 1.555 6.338a2.5 2.5 0 0 0 4.9-.744c-.122-2.287-.394-6.547-.394-6.548a3.02 3.02 0 0 0-1.206-1.945 3.069 3.069 0 0 0-4.858 2.9z"
    />
    <Path
      fill={props.color}
      d="M3.826 14.124a.75.75 0 0 1-.432-1.364 8.57 8.57 0 0 1 7.8-1.28.75.75 0 0 1-.445 1.432 7.06 7.06 0 0 0-6.5 1.077.74.74 0 0 1-.423.135"
    />
    <Path
      fill={props.color}
      d="M7.575 12.553a.75.75 0 0 1-.737-.618l-.33-1.85a.75.75 0 1 1 1.475-.263l.331 1.849a.75.75 0 0 1-.739.882M16.923 9.805a.75.75 0 0 1-.739-.882l.331-1.85a.75.75 0 1 1 1.476.264l-.33 1.85a.75.75 0 0 1-.738.618"
    />
    <Path
      fill={props.color}
      d="M20.672 11.376a.75.75 0 0 1-.429-.135 7.06 7.06 0 0 0-6.5-1.077.75.75 0 0 1-.445-1.432 8.58 8.58 0 0 1 7.8 1.28.75.75 0 0 1-.43 1.364z"
    />
  </Svg>
);
export default IconlystSlippers2Outline;
