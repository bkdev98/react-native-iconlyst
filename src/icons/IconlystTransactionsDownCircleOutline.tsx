import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownCircleOutline = ({
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
      d="M9.113 7.861a.75.75 0 0 1 .75-.75h6.272a.75.75 0 0 1 0 1.5H9.863a.75.75 0 0 1-.75-.75M7.113 10.861a.75.75 0 0 1 .75-.75h2.482a.75.75 0 1 1 0 1.5H7.863a.75.75 0 0 1-.75-.75M9.45 13.104a.75.75 0 0 0-.75.75l.005 2.763a.75.75 0 0 0 .751.749l2.762-.005a.75.75 0 0 0-.002-1.5l-2.012.003-.003-2.012a.75.75 0 0 0-.752-.748"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.466 8.817a.75.75 0 0 0-1.06.02l-3.753 3.894-1.764-1.76a.75.75 0 0 0-1.071.013L8.91 16.102a.75.75 0 1 0 1.082 1.038l4.378-4.566 1.763 1.758a.75.75 0 0 0 1.07-.01l4.281-4.444a.75.75 0 0 0-.02-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 20.37a8.25 8.25 0 1 0 0-16.501 8.25 8.25 0 0 0 0 16.5m9.75-8.25c0 5.383-4.365 9.75-9.75 9.75s-9.75-4.367-9.75-9.75a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsDownCircleOutline;
