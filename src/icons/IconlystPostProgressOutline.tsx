import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostProgressOutline = ({
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
      d="M7.823 4.682a1.276 1.276 0 0 0-1.279 1.273l-.015 7.566h11.127l.015-7.54A1.276 1.276 0 0 0 16.4 4.702l-1.562-.004.01 4.601a.75.75 0 0 1-.983.715l-1.755-.573-1.768.583a.75.75 0 0 1-.985-.712l-.004-4.627zm3.029.007.003 3.587 1.018-.335a.75.75 0 0 1 .467 0l1.005.327-.008-3.573zm3.101-1.492-6.127-.015a2.776 2.776 0 0 0-2.782 2.77l-.015 7.569h-.031a3.649 3.649 0 0 0 0 7.297h14.203a3.648 3.648 0 1 0 0-7.297h-.045l.015-7.538a2.776 2.776 0 0 0-2.769-2.78l-2.182-.006a.8.8 0 0 0-.267 0m4.422 11.824h.826a2.149 2.149 0 0 1 0 4.297H4.998a2.148 2.148 0 1 1 0-4.297h13.377M5.372 17.169a.75.75 0 0 1 .75-.75h1.155a.75.75 0 0 1 0 1.5H6.122a.75.75 0 0 1-.75-.75m5.416 0a.75.75 0 0 1 .75-.75h1.155a.75.75 0 1 1 0 1.5h-1.155a.75.75 0 0 1-.75-.75m5.415 0a.75.75 0 0 1 .75-.75h1.155a.75.75 0 0 1 0 1.5h-1.155a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPostProgressOutline;
