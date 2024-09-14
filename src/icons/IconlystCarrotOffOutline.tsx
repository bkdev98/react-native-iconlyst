import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotOffOutline = ({
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
      d="M9.83 19.009c-.19 0-.38-.07-.53-.22l-1.42-1.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.42 1.42c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M18.15 11.099c-2.14 0-3.42-1.89-3.47-1.97a.74.74 0 0 1 .08-.92c.18-.19 1.78-1.87 3.4-1.87 2.14 0 3.42 1.89 3.47 1.97.17.25.17.58 0 .83-.05.08-1.33 1.97-3.47 1.97zm-1.81-2.33c.38.37 1.02.83 1.81.83s1.49-.5 1.87-.88c-.38-.38-1.04-.88-1.87-.88-.55 0-1.29.49-1.81.94z"
    />
    <Path
      fill={props.color}
      d="M15.25 9.469c-.18 0-.37-.07-.51-.2-.19-.18-1.87-1.78-1.87-3.4 0-2.14 1.89-3.42 1.97-3.47a.74.74 0 0 1 .83 0c.08.05 1.97 1.33 1.97 3.47s-1.89 3.42-1.97 3.47c-.13.08-.27.12-.41.12zm0-5.46c-.38.38-.88 1.04-.88 1.87 0 .54.47 1.27.93 1.81.37-.38.83-1.02.83-1.81s-.5-1.49-.88-1.87M4.23 21.709c-.61 0-1.11-.15-1.46-.5-2.33-2.33 4.18-11.62 5.58-13.02l1.06 1.06c-2.62 2.62-6.43 10.05-5.58 10.9s8.28-2.96 10.9-5.58l1.06 1.06c-1.2 1.2-8.09 6.08-11.56 6.08"
    />
    <Path
      fill={props.color}
      d="M20.99 21.749c-.19 0-.38-.07-.53-.22l-18-18a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l18 18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M16.6 13.419s-.09 0-.14-.01a.75.75 0 0 1-.6-.88c.21-1.15-.2-2.35-1.13-3.28s-2.1-1.34-3.24-1.14a.75.75 0 0 1-.87-.61c-.07-.41.2-.8.61-.87 1.62-.29 3.29.28 4.56 1.56 1.29 1.29 1.85 2.97 1.55 4.62a.75.75 0 0 1-.74.61"
    />
  </Svg>
);
export default IconlystCarrotOffOutline;
