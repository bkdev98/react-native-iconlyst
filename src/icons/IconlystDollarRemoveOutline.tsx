import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRemoveOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.813A8.253 8.253 0 0 0 4 12.063a8.253 8.253 0 0 0 8.25 8.25 8.253 8.253 0 0 0 8.25-8.25.75.75 0 0 1 1.5 0c0 5.382-4.368 9.75-9.75 9.75s-9.75-4.368-9.75-9.75c0-5.383 4.368-9.75 9.75-9.75a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.295 10.607c0-1.19.966-2.156 2.157-2.156h2.611a.75.75 0 0 1 0 1.5h-2.611a.656.656 0 1 0 0 1.313h1.607a2.156 2.156 0 0 1 0 4.313h-2.612a.75.75 0 1 1 0-1.5h2.612a.656.656 0 0 0 0-1.313h-1.607a2.156 2.156 0 0 1-2.157-2.157"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.256 7.262a.75.75 0 0 1 .75.75v1.19a.75.75 0 0 1-1.5 0v-1.19a.75.75 0 0 1 .75-.75m0 6.812a.75.75 0 0 1 .75.75v1.182a.75.75 0 0 1-1.5 0v-1.182a.75.75 0 0 1 .75-.75M16.587 3.241a.75.75 0 0 1 1.06 0l1.181 1.182L20.01 3.24a.75.75 0 1 1 1.061 1.06L19.89 5.485l1.181 1.182a.75.75 0 1 1-1.06 1.06l-1.182-1.181-1.18 1.181a.75.75 0 0 1-1.061-1.06l1.181-1.182-1.181-1.182a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarRemoveOutline;
