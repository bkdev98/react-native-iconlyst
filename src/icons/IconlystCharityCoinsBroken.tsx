import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCharityCoinsBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.686 16.843h1.45c1.035 0 1.87-.744 1.87-1.78 0-.86-.582-1.547-1.415-1.757-1.195-.3-2.386-.535-3.633-.505-1.974.05-3.355 1.15-4.92 2.197"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.687 16.877c.732-.107 1.479.001 2.22-.016 1.717-.041 3.063-1.493 4.37-2.477a1.674 1.674 0 0 1 2.194.156 1.69 1.69 0 0 1 0 2.384c-.839.841-1.619 1.647-2.515 2.318M14.898 20.4c-2.656 1.033-5.12.532-7.809 0-1.04-.206-1.998-.218-3.052-.218M13.29 8.388a2.72 2.72 0 0 1-2.853-4.046M15.456 5.275A2.709 2.709 0 0 0 12.819 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.966 10.663a2.718 2.718 0 1 1 2.446-1.53"
    />
  </Svg>
);
export default IconlystCharityCoinsBroken;
