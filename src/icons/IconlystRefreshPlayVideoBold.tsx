import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshPlayVideoBold = ({
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
      d="M11.333 15.007c.244.145.52.218.812.218.242 0 .495-.05.749-.151a9.2 9.2 0 0 0 2.75-1.724c.423-.385.656-.877.655-1.387s-.236-.998-.653-1.371a8.9 8.9 0 0 0-2.742-1.723c-.531-.224-1.094-.204-1.544.055-.438.25-.718.69-.792 1.25a16.7 16.7 0 0 0 0 3.598c.07.545.34.983.765 1.235"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.301 7.125a.749.749 0 0 0-.148-1.345l-2.715-.952a.749.749 0 0 0-.997.677l-.113 2.71a.75.75 0 0 0 1.146.668l.7-.435c1.476 3.031.968 6.819-1.519 9.323a8.13 8.13 0 0 1-7.218 2.272.751.751 0 0 0-.266 1.477 9.647 9.647 0 0 0 8.549-2.691c2.982-3.005 3.566-7.566 1.736-11.179zM6.967 15.108a.75.75 0 0 0-.773.01l-.7.436c-1.478-3.032-.97-6.821 1.516-9.325a8.13 8.13 0 0 1 7.22-2.271.751.751 0 0 0 .264-1.477 9.65 9.65 0 0 0-8.548 2.69C2.964 8.175 2.38 12.737 4.21 16.35l-.845.525a.75.75 0 0 0-.349.718.75.75 0 0 0 .497.626l2.715.952a.76.76 0 0 0 .669-.086.75.75 0 0 0 .328-.59l.113-2.71a.75.75 0 0 0-.37-.678"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshPlayVideoBold;
