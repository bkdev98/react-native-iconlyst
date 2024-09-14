import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatOutlinesharp = ({
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
      d="M11.125 2.373c-1.372.196-3.086.889-4.262 1.723-.732.52-1.952 1.787-2.462 2.558-1.185 1.793-1.782 4.176-1.553 6.2.157 1.383.75 3.216 1.444 4.46.134.238.242.477.242.531s-.504.907-1.121 1.895-1.148 1.842-1.18 1.896c-.038.066 1.92.096 5.804.09 5.591-.01 5.901-.02 6.704-.217 5.58-1.37 8.776-7.007 7.064-12.457-1.418-4.516-5.956-7.353-10.68-6.68M14.07 3.89a8.29 8.29 0 0 1 6.574 6.498c.257 1.27.162 2.931-.24 4.165-.706 2.174-2.143 3.828-4.225 4.863-1.68.835-2.12.888-7.132.858l-4.218-.026.747-1.201.746-1.2-.416-.683c-.53-.871-.99-1.931-1.327-3.06-.217-.729-.268-1.1-.275-2.031-.018-2.302.707-4.127 2.299-5.781 1.268-1.319 3.022-2.237 4.72-2.472.691-.096 2.066-.06 2.747.07m-5.968 8.534v.747l.768-.029.768-.029.03-.718.028-.719H8.102zm3.667-.004v.743h1.486v-1.487H11.77zm3.588-.025.029.718.768.03.768.028v-1.495h-1.595z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatOutlinesharp;
