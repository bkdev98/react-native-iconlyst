import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.528 4.836a.553.553 0 0 1 .94 0L14.4 7.933a.55.55 0 0 0 .45.26l3.649.126a.553.553 0 0 1 .469.813l-1.715 3.223a.55.55 0 0 0 0 .52l1.715 3.223a.553.553 0 0 1-.47.813l-3.648.126a.55.55 0 0 0-.45.26l-1.934 3.096a.553.553 0 0 1-.939 0l-1.933-3.096a.55.55 0 0 0-.45-.26l-3.65-.127a.553.553 0 0 1-.469-.812l1.715-3.223a.55.55 0 0 0 0-.52L5.026 9.132a.553.553 0 0 1 .47-.813l3.648-.127a.55.55 0 0 0 .45-.26zM16.576 20.654l-.545-.958M7.424 4.576l.545.958M21.25 12.615h-1.102m-17.398 0h1.102M12 10.413v4.404m1.906-3.303-3.814 2.202m3.814 0-3.814-2.202M7.424 20.654l.545-.958m8.607-15.12-.545.958"
    />
  </Svg>
);
export default IconlystSnowLight;
