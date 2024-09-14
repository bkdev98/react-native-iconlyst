import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUi8Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.16 10.73v2.728c0 1 .818 1.817 1.818 1.817s1.818-.818 1.818-1.817V10.73M14.522 11.902v3.283"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.888 17.593a2.29 2.29 0 0 1-1.154-1.99V9.855a2.29 2.29 0 0 1 1.154-1.99l5.364-3.1a2.31 2.31 0 0 1 2.3 0l1.332.77M19.07 11.186v4.417a2.29 2.29 0 0 1-1.154 1.99l-5.364 3.1c-.71.41-1.59.41-2.3 0l-2.682-1.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.203 7.757c0 .543-.473.984-1.055.984-.584 0-1.056-.44-1.056-.984 0-.543.472-.984 1.056-.984.582 0 1.055.44 1.055.984ZM19.203 5.788c0 .543-.473.984-1.055.984-.584 0-1.056-.44-1.056-.984 0-.543.472-.984 1.056-.984.582 0 1.055.44 1.055.984Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22.572 6.771a4.424 4.424 0 1 1-1.539-3.354"
    />
  </Svg>
);
export default IconlystUi8Broken;
