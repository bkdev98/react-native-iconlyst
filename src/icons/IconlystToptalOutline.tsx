import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToptalOutline = ({
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
      d="M13.288 21.75a.75.75 0 0 1-.53-.22l-7.71-7.71a.76.76 0 0 1-.22-.61c.01-.17.09-.34.22-.46l5.27-5.27-2.04-2.04a.75.75 0 0 1 0-1.06l1.91-1.91c.29-.29.77-.29 1.06 0l7.71 7.71c.19.19.26.47.19.73-.03.13-.1.25-.19.34l-5.27 5.27 2.03 2.03c.29.29.29.77 0 1.06l-1.91 1.92a.75.75 0 0 1-.53.22zm-6.66-8.46 6.66 6.65.85-.86-2.04-2.03a.75.75 0 0 1 0-1.06l5.28-5.28-6.66-6.65-.85.85 2.04 2.04c.29.29.29.77 0 1.06l-5.28 5.27zm4.09 2.07c-.19 0-.38-.07-.53-.22l-1.32-1.32a.75.75 0 0 1 0-1.06l3.89-3.89c.29-.29.77-.29 1.06 0l1.32 1.32a.75.75 0 0 1 0 1.06l-3.89 3.89c-.15.15-.34.22-.53.22m-.26-2.07.26.26 2.83-2.83-.26-.26z"
    />
  </Svg>
);
export default IconlystToptalOutline;
