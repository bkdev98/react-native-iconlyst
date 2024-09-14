import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookAiAltOutline = ({
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
      d="M3.611 18.481a3.27 3.27 0 0 1 3.27-3.269h12.758a.75.75 0 0 1 .374 1.4c-.75.432-1.1 1.222-1.075 2.013.025.814.43 1.454.984 1.68a.75.75 0 0 1-.283 1.445H6.88a3.27 3.27 0 0 1-3.269-3.269m3.27-1.769a1.769 1.769 0 0 0 0 3.538h10.951a3.884 3.884 0 0 1 .064-3.538z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.611 5.519a3.27 3.27 0 0 1 3.27-3.269h11.75c.97 0 1.758.787 1.758 1.758v11.954a.75.75 0 0 1-1.5 0V4.008a.26.26 0 0 0-.258-.258H6.881c-.978 0-1.77.792-1.77 1.769v12.975a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.04 12.03a.75.75 0 0 1-.704-.49l-.102-.275a3.04 3.04 0 0 0-1.796-1.798l-.275-.102a.75.75 0 0 1 0-1.407l.275-.102a3.04 3.04 0 0 0 1.796-1.798l.102-.276a.75.75 0 0 1 1.407 0l.102.276c.308.833.964 1.49 1.795 1.798l.275.102a.75.75 0 0 1 0 1.407l-.275.102a3.04 3.04 0 0 0-1.795 1.798l-.102.276a.75.75 0 0 1-.704.49m.965-3.368a4.5 4.5 0 0 1-.966-.967 4.5 4.5 0 0 1-.965.967c.369.271.694.597.965.966.272-.369.597-.695.966-.966M15.39 13.282a.75.75 0 0 1-.717-.532c-.1-.33-.358-.588-.687-.688a.75.75 0 0 1 0-1.435c.329-.1.586-.357.687-.688a.75.75 0 0 1 1.435 0c.1.33.358.588.687.688a.75.75 0 0 1 0 1.435c-.329.1-.587.358-.687.688a.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookAiAltOutline;
