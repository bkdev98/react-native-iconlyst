import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImtokenLight = ({
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
      d="M11.745 18.323c4.635-.405 9.802-4.204 9.21-12.244 0 0-.028-.139-.1-.2a.5.5 0 0 0-.167-.081c-3.352-.694-6.892 1.496-7.875 2.422-.269.256-.565.577-.558.971-.12 2.46-1.688 4.212-3.938 4.41-2.085.18-3.679-1.143-3.821-2.79-.143-1.646.885-2.306 1.447-2.355.47-.04 1.324.075 1.41 1.054.05.536-.15.604-.105 1.125a.98.98 0 0 0 1.095.84c.585-.049 1.433-.607 1.31-2.01-.125-1.402-1.58-2.554-3.21-2.411-1.632.142-3.71 1.556-3.417 4.931.356 4.088 4.414 6.713 8.719 6.338"
    />
  </Svg>
);
export default IconlystImtokenLight;
