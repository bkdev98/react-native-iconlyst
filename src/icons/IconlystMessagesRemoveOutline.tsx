import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRemoveOutline = ({
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
      d="M12.267 22.51h-.05c-.6-.006-2.567 0-4.511 0h-2.7a1.626 1.626 0 0 1-1.347-2.528c.22-.33.5-.735.725-1.048a.22.22 0 0 0 .014-.251 17 17 0 0 1-1-1.87 9.84 9.84 0 0 1 .79-9.566.754.754 0 1 1 1.249.847 8.35 8.35 0 0 0-.654 8.134q.416.883.927 1.717a1.73 1.73 0 0 1-.1 1.867c-.207.294-.483.687-.7 1.008a.12.12 0 0 0-.007.13.11.11 0 0 0 .106.065h7.224a8.4 8.4 0 0 0 4.646-1.427.75.75 0 1 1 .852 1.235 9.57 9.57 0 0 1-5.464 1.687M19.994 18.084a.75.75 0 0 1-.646-1.13 8.35 8.35 0 0 0-.6-9.33A8.26 8.26 0 0 0 8.062 5.619a.75.75 0 0 1-.768-1.288 9.755 9.755 0 0 1 13.343 13.383.75.75 0 0 1-.643.37"
    />
    <Path
      fill={props.color}
      d="M18.817 22.47a.75.75 0 0 1-.531-.221L2.706 6.616a.75.75 0 0 1 1.062-1.059l15.58 15.636a.75.75 0 0 1-.531 1.28z"
    />
  </Svg>
);
export default IconlystMessagesRemoveOutline;
