import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDarkModeOutline = ({
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
      d="M12.614 21.723c-2.53 0-5.03-.97-6.89-2.84s-2.85-4.28-2.85-6.88 1.01-5.04 2.85-6.88c3.05-3.06 7.82-3.73 11.59-1.63.26.15.44.48.41.78-.03.33-.25.6-.57.7-3.05.94-5.19 3.83-5.19 7.03 0 3.21 2.14 6.1 5.19 7.02.29.09.53.38.57.68s-.14.65-.4.8c-1.47.82-3.1 1.22-4.71 1.22m0-17.94c-2.14 0-4.25.83-5.83 2.4s-2.41 3.62-2.41 5.82.85 4.27 2.41 5.82c2.21 2.21 5.49 2.94 8.39 1.99-2.83-1.51-4.7-4.52-4.7-7.81s1.87-6.3 4.69-7.82c-.83-.27-1.7-.4-2.55-.4m3.97 1.02s.01 0 .02.01c0 0-.01 0-.02-.01M18.974 19.053c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06 8.18 8.18 0 0 0 2.41-5.81c0-2.19-.85-4.26-2.41-5.81a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a9.65 9.65 0 0 1 2.85 6.87c0 2.59-1.01 5.04-2.85 6.87-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystDarkModeOutline;
