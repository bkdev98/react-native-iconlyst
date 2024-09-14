import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixOutline = ({
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
      d="M13.62 4.889c0-.905.734-1.639 1.64-1.639h2.962c.905 0 1.639.734 1.639 1.639V19.11c0 .905-.734 1.639-1.639 1.639h-3.105a1.64 1.64 0 0 1-1.322-.67l.605-.443-.605.443L4.284 7.11a.75.75 0 0 1 1.21-.887l9.51 12.97-.543.4.544-.4a.14.14 0 0 0 .112.057h3.105a.14.14 0 0 0 .139-.139V4.89a.14.14 0 0 0-.139-.139H15.26a.14.14 0 0 0-.139.139v5.98a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.778 4.75a.14.14 0 0 0-.14.139V19.11c0 .077.063.139.14.139H8.74a.14.14 0 0 0 .138-.139v-5.778a.75.75 0 0 1 1.5 0v5.778c0 .905-.733 1.639-1.638 1.639H5.778a1.64 1.64 0 0 1-1.64-1.639V4.89c0-.905.734-1.639 1.64-1.639h3.105c.522 0 1.013.249 1.321.67l9.512 12.97a.75.75 0 0 1-1.21.887L8.995 4.807a.14.14 0 0 0-.112-.057z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNetflixOutline;
