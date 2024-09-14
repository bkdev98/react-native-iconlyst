import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPancakeswapOutline = ({
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
      d="M12.248 21.773a13.5 13.5 0 0 1-3.507-.468c-3.394-.953-5.758-3.48-5.758-6.148A6.33 6.33 0 0 1 5.976 9.61a35 35 0 0 1-.847-4.138 3.007 3.007 0 0 1 5.995-.478l.31 3.208a7.7 7.7 0 0 1 1.63 0l.312-3.208a3.01 3.01 0 0 1 5.993.58c-.13 1.072-.61 3.087-.843 4.039a6.33 6.33 0 0 1 2.99 5.543c0 2.668-2.364 5.2-5.748 6.145-1.148.31-2.331.469-3.52.47m-4.122-18c-.048 0-.1 0-.146.007a1.513 1.513 0 0 0-1.356 1.65.3.3 0 0 1 0 .112c.018.3.487 2.393.93 4.228a.75.75 0 0 1-.327.809 5.01 5.01 0 0 0-2.747 4.577c0 2 1.914 3.932 4.655 4.7a11.9 11.9 0 0 0 6.233 0c2.732-.767 4.645-2.7 4.645-4.7a5.01 5.01 0 0 0-2.747-4.577.75.75 0 0 1-.326-.82c.008-.03.778-3.058.933-4.342a1.49 1.49 0 0 0-.337-1.093 1.509 1.509 0 0 0-2.67.815L14.474 9.2a.75.75 0 0 1-1.142.566 5.1 5.1 0 0 0-2.185.009.73.73 0 0 1-.72.03.75.75 0 0 1-.405-.6l-.394-4.062a1.514 1.514 0 0 0-1.502-1.37z"
    />
    <Path
      fill={props.color}
      d="M15.313 15.645a.75.75 0 0 1-.75-.75v-.73a.75.75 0 1 1 1.5 0v.73a.75.75 0 0 1-.75.75m-6.126 0a.75.75 0 0 1-.75-.75v-.73a.75.75 0 0 1 1.5 0v.73a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPancakeswapOutline;
