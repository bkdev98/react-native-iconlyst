import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCharityCoinsTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.186 16.843h1.45c1.035 0 1.87-.744 1.87-1.78 0-.86-.582-1.547-1.415-1.757-1.195-.3-2.386-.535-3.633-.505-1.974.05-3.355 1.15-4.92 2.197"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.187 16.877c.732-.107 1.478.001 2.22-.016 1.717-.041 3.063-1.493 4.37-2.477a1.674 1.674 0 0 1 2.194.156 1.69 1.69 0 0 1 0 2.384c-1.412 1.417-2.66 2.732-4.573 3.476-2.656 1.033-5.12.532-7.809 0-1.04-.206-1.998-.218-3.052-.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.956 5.275a2.7 2.7 0 0 0-.754-1.479 2.717 2.717 0 1 0-1.413 4.592"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.184 7.945a2.718 2.718 0 1 1-5.435 0 2.718 2.718 0 0 1 5.435 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCharityCoinsTwoTone;
