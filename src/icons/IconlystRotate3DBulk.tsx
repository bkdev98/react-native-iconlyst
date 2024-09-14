import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotate3DBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M22.301 7.126a.749.749 0 0 0-.148-1.345l-2.715-.952a.746.746 0 0 0-.997.677l-.113 2.71a.75.75 0 0 0 1.146.668l.7-.435c1.476 3.03.97 6.818-1.517 9.323a8.13 8.13 0 0 1-7.22 2.272.751.751 0 0 0-.266 1.477 9.65 9.65 0 0 0 8.55-2.691c2.982-3.005 3.566-7.566 1.735-11.18zM6.967 15.108a.75.75 0 0 0-.773.01l-.7.436c-1.478-3.032-.97-6.821 1.516-9.325a8.14 8.14 0 0 1 7.22-2.271.75.75 0 0 0 .264-1.477 9.65 9.65 0 0 0-8.548 2.69C2.964 8.175 2.38 12.737 4.21 16.35l-.845.525a.749.749 0 0 0 .148 1.344l2.715.953q.121.043.248.042a.76.76 0 0 0 .421-.128.75.75 0 0 0 .328-.59l.113-2.71a.75.75 0 0 0-.37-.68" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.482 12.898a2.23 2.23 0 0 0-.974-1.842l.813-1.008a.75.75 0 0 0-.584-1.22H9.154a.75.75 0 0 0 0 1.5h1.015l-.5.62a.751.751 0 0 0 .584 1.22.73.73 0 0 1 0 1.46.72.72 0 0 1-.514-.217.75.75 0 0 0-1.067 1.054c.422.427.984.662 1.581.662 1.23 0 2.23-1 2.23-2.229M16.745 11.978a1.65 1.65 0 0 1-1.648 1.65h-.05v-3.3h.05c.909 0 1.648.74 1.648 1.65m-2.448-3.15a.75.75 0 0 0-.75.75v4.8c0 .413.336.75.75.75h.8a3.15 3.15 0 0 0 3.148-3.15 3.15 3.15 0 0 0-3.148-3.15z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotate3DBulk;
