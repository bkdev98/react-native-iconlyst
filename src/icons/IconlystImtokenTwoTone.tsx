import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImtokenTwoTone = ({
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
      d="M20.955 6.079s-.028-.139-.1-.2c-.059-.051-.167-.081-.167-.081-3.352-.694-6.892 1.496-7.875 2.422-.269.256-.565.577-.558.971-.12 2.46-1.688 4.212-3.938 4.41-2.085.18-3.679-1.143-3.821-2.79-.143-1.646.885-2.306 1.447-2.355.47-.04 1.324.075 1.41 1.054.05.536-.15.604-.105 1.125a.98.98 0 0 0 1.095.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.955 6.078c.592 8.04-4.575 11.839-9.21 12.244-4.305.375-8.363-2.25-8.72-6.338-.292-3.375 1.786-4.788 3.417-4.93 1.631-.143 3.086 1.008 3.21 2.41s-.724 1.962-1.309 2.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystImtokenTwoTone;
