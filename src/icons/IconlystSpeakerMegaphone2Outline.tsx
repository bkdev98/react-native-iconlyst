import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone2Outline = ({
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
      d="M17.973 17.9a1 1 0 0 1-.152-.016c-.43-.088-10.53-2.167-11.83-2.492a5.252 5.252 0 0 1 0-9.9c1.3-.323 11.352-2.392 11.78-2.479a.75.75 0 1 1 .3 1.468c-.1.022-10.448 2.151-11.718 2.466a3.768 3.768 0 0 0 0 6.984c1.269.318 11.663 2.458 11.768 2.48a.75.75 0 0 1-.151 1.483z"
    />
    <Path
      fill={props.color}
      d="M18.232 17.92c-2.15 0-3.772-3.213-3.772-7.476s1.622-7.477 3.772-7.477 3.772 3.215 3.772 7.477-1.622 7.477-3.772 7.477m0-13.453c-.949 0-2.272 2.274-2.272 5.977s1.323 5.977 2.272 5.977 2.272-2.274 2.272-5.977-1.323-5.977-2.272-5.977M8.677 21.032a2.63 2.63 0 0 1-1.517-.447 3.5 3.5 0 0 1-1.347-2.467l-.383-3.367a.75.75 0 1 1 1.49-.17l.379 3.338a2.2 2.2 0 0 0 .706 1.427 1.5 1.5 0 0 0 1.2.123c1.938-.486 3.97-.47 5.9.048a.75.75 0 0 1-.58 1.382 10.54 10.54 0 0 0-5 .033 4 4 0 0 1-.848.1"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone2Outline;
