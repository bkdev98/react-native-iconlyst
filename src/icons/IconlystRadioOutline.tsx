import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioOutline = ({
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
      d="M16.78 21.592H7.718c-3.121 0-5.218-2.189-5.218-5.447v-3.789C2.5 9.1 4.6 6.91 7.718 6.91h9.063C19.903 6.91 22 9.1 22 12.356v3.79c0 3.257-2.098 5.446-5.22 5.446M7.718 8.41A3.6 3.6 0 0 0 4 12.356v3.79a3.6 3.6 0 0 0 3.718 3.946h9.062a3.6 3.6 0 0 0 3.72-3.947v-3.789a3.602 3.602 0 0 0-3.719-3.946z"
    />
    <Path
      fill={props.color}
      d="M8.65 12.851H8.64l-1.5-.023a.75.75 0 1 1 .011-1.5h.01l1.5.022a.75.75 0 0 1-.01 1.5zM14.377 18.152a3.9 3.9 0 1 1 3.9-3.9 3.91 3.91 0 0 1-3.9 3.9m0-6.308a2.4 2.4 0 1 0 2.4 2.4 2.406 2.406 0 0 0-2.4-2.392zM7.433 17.524a1.03 1.03 0 0 1-.864-.464 1.038 1.038 0 0 1 .467-1.536q.199-.07.41-.079a1.03 1.03 0 0 1 .95.643 1.04 1.04 0 0 1-.963 1.436M7.72 8.425a.75.75 0 0 1-.532-1.28l4.511-4.51a.75.75 0 1 1 1.061 1.06l-4.51 4.51a.74.74 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystRadioOutline;
