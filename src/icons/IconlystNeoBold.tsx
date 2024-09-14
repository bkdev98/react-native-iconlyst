import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeoBold = ({
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
      d="m18.025 5.157-5.137-2.33a.34.34 0 0 0-.282.001L4.753 6.495a.34.34 0 0 0-.196.306l-.001 10.893c0 .128.072.245.186.302l5.529 2.765a.34.34 0 0 0 .49-.302v-6.945l.002-3.967c0-.039.014-.074.022-.11.005-.024.006-.048.014-.07a.54.54 0 0 1 .34-.334l6.89-3.263a.338.338 0 0 0-.004-.613"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.962 6.542-6.91 3.272a.34.34 0 0 0-.194.306v2.881a.34.34 0 0 0 .187.303l6.911 3.446a.338.338 0 0 0 .489-.302v-9.6a.338.338 0 0 0-.483-.306"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeoBold;
