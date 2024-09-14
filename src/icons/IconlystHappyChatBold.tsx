import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyChatBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.224 10.2a.976.976 0 0 1-.002-1.95c.539 0 .978.437.978.975a.976.976 0 0 1-.976.975m.065 4.397c-.819 1.068-2.017 1.68-3.29 1.68-1.272 0-2.47-.612-3.29-1.68a.75.75 0 1 1 1.19-.913c.534.695 1.299 1.093 2.1 1.093s1.567-.398 2.1-1.093a.749.749 0 1 1 1.189.913m-7.54-5.372a.97.97 0 0 1 .282-.687.977.977 0 0 1 1.668.687.976.976 0 0 1-1.95 0m10.968-3.943c-3.704-3.705-9.733-3.703-13.435 0C2.475 8.088 1.71 12.396 3.37 15.977c.19.475.314.807.314 1.087 0 .332-.14.746-.277 1.146-.266.778-.566 1.659.08 2.303.646.647 1.53.342 2.308.074.398-.137.808-.278 1.132-.28.29 0 .657.147 1.082.318a9.5 9.5 0 0 0 3.97.869 9.53 9.53 0 0 0 6.739-2.778A9.44 9.44 0 0 0 21.499 12a9.43 9.43 0 0 0-2.782-6.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyChatBold;
