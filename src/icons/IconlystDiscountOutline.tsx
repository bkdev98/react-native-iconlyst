import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountOutline = ({
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
      d="M17.744 21.176H5.608a3.36 3.36 0 0 1-3.364-3.354v-7.248a1.87 1.87 0 0 1 .885-1.619 1.72 1.72 0 0 1 1.691-.064l.662.35a.68.68 0 0 0 .593.011l1.24-.554a1 1 0 0 1 .147-.052V5.278a1.87 1.87 0 0 1 .89-1.618 1.71 1.71 0 0 1 1.685-.066l.662.35a.67.67 0 0 0 .6.01l1.84-.818a3.65 3.65 0 0 1 2.934 0l1.85.822a.68.68 0 0 0 .6-.014l.647-.343a1.72 1.72 0 0 1 1.7.06 1.88 1.88 0 0 1 .885 1.62l-.008 11.476c-.013 2.724-1.539 4.42-4.003 4.42m-9.344-1.5h9.344c2.058 0 2.49-1.589 2.49-2.922l.008-11.477a.39.39 0 0 0-.169-.339.21.21 0 0 0-.22-.008l-.646.341a2.2 2.2 0 0 1-1.9.058l-1.849-.822a2.15 2.15 0 0 0-1.727 0l-1.838.818a2.19 2.19 0 0 1-1.9-.054l-.658-.348a.2.2 0 0 0-.21.015.38.38 0 0 0-.172.338v12.546c.003.66-.189 1.305-.553 1.854m-4.369-9.478a.24.24 0 0 0-.12.036.39.39 0 0 0-.169.34v7.248a1.859 1.859 0 1 0 3.718 0v-7.547l-.78.35a2.18 2.18 0 0 1-1.9-.057l-.657-.346a.2.2 0 0 0-.092-.02z"
    />
    <Path
      fill={props.color}
      d="M12.48 15.392a.751.751 0 0 1-.53-1.28l4.624-4.627a.751.751 0 0 1 1.061 1.061l-4.627 4.626c-.14.14-.33.22-.529.22M16.99 15.515a.936.936 0 1 1 0-1.872.936.936 0 0 1 0 1.871M12.49 11.015a.936.936 0 1 1 0-1.872.936.936 0 0 1 0 1.871"
    />
  </Svg>
);
export default IconlystDiscountOutline;
